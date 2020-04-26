function Dictionary() {
    var items = {};
    //向字典中添加新元素
    this.set = function(key, value) {
        items[key] = value;
    };

    //通过使用键值来从字典中移除键值对应的数据值
    this.remove = function(key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };

    //如果某个键值存在于这个字典中，则返回true，否则返回false
    this.has = function(key) {
        return key in items;
    };
    //通过键值查找特定的数值并返回
    this.get = function(key) {
        return items[key] ? items[key] : undefined;
    };

    //将这个字典中的所有元素全部删除
    this.clear = function() {
        items = {};
    };

    //返回字典所包含元素的数量，与数组的length属性类似
    this.size = function() {
        return Object.keys(items).length;
    };

    //将字典所包含的所有键名以数组形式返回
    this.keys = function() {
        return Object.keys(items);
    };

    //将字典所包含的所有数值以数组形式返回
    this.values = function() {
        var values = [];
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    };

    this.getItems = function() {
        return items;
    };
}

// var dictionary = new Dictionary();
// dictionary.set("Gandalf", "gandalf@email.com");
// dictionary.set("John", "johnsnow@email.com");
// dictionary.set("Tyrion", "tyrion@email.com");

// console.log(dictionary.has("Gandalf"));
// console.log(dictionary.size());
// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.get("Tyrion"));

// dictionary.remove("John");
// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.getItems());

function HashTable() {
    var table = [];
    //散列函数1
    var loseloseHashCode = function(key) {
        var hash = 0;
        for (var i = 0;i < key.length;i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };
    //散列函数2
    var djb2HashCode = function(key) {
        var hash = 5381;
        for (var i = 0;i < key.length;i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % 1013;
    };

    var ValuePair = function(key, value) {
        this.key = key;
        this.value = value;
        this.toString = function() {
            return '[' + this.key + ' - ' + this.value + ']';
        };
    };
    //-----------------分离连接-----------------------
    //向散列表增加一个新的项
    this.push = function(key, value) {
        var position = loseloseHashCode(key);
        console.log(position + " - " + key);
        if (table[position] == undefined) {
            table[position] = new LinkedList();
        }
        table[position].append(new ValuePair(key, value));
    };

    //根据键值检索到的特定的值
    this.get = function(key) {
        var position = loseloseHashCode(key);
        if (table[position] !== undefined) {
            //遍历链表来寻找键/值
            var current = table[position].getHead();
            while(current.next) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }
            if (current.element.key === key) {
                return current.element.value;
            }
        }
        return undefined;
    };

    this.remove = function(key) {
        var position = loseloseHashCode(key);
        if (table[position] !== undefined) {
            var current = table[position].getHead();
            while(current.next) {
                if (current.element.key === key) {
                    table[position].remove(current.element);
                    if (table[position].isEmpty()) {
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
            if (current.element.key === key) {
                table[position].remove(current.element);
                if (table[position].isEmpty()) {
                    table[position] = undefined;
                }
                return true;
            }   
        }
        return false;
    };

    //---------------------线性探查-------------------
    // this.push = function(key, value) {
    //     var position = loseloseHashCode(key);
    //     if (table[position] !== undefined) {
    //         table[position] = new ValuePair(key, value);
    //     } else {
    //         var index = ++position;
    //         while (table[index] != undefined) {
    //             index++;
    //         }
    //         table[index] = new ValuePair(key, value);
    //     }
    // };

    // this.get = function(key) {
    //     var position = loseloseHashCode(key);
    //     if (table[position] !== undefined) {
    //         if (table[position].key == key) {
    //             return table[position].value;
    //         } else {
    //             var index = ++position;
    //             while(table[index] === undefined || table[index].key !== key) {
    //                 index++;
    //             }   
    //             if (table[index].key === key) {
    //                 return table[index].value;
    //             }
    //         }
    //     }
    //     return undefined;
    // };

    // this.remove = function(key) {
    //     var position = loseloseHashCode(key);
    //     if (table[position] !== undefined) {
    //         if (table[position].key == key) {
    //             table[index] = undefined;
    //             return true;
    //         } else {
    //             var index = ++position;
    //             while(table[index] === undefined || table[index].key !== key) {
    //                 index++;
    //             }   
    //             if (table[index].key === key) {
    //                 table[index] = undefined;
    //                 return true;
    //             }
    //         }
    //     }
    //     return false;
    // }

    this.print = function() {
        for (var i = 0;i < table.length;++i) {
            if (table[i] !== undefined) {
                console.log(i + ": " + table[i]);
            }
        }
    };
}

// var hash = new HashTable();
// hash.push("Gandalf", "gandalf@email.com");
// hash.push("John", "johnsnow@email.com");
// hash.push("Tyrion", "tyrion@email.com");
// console.log(hash.get("Gandalf"));
// console.log(hash.get("Loiane"));
// hash.remove("Gandalf");
// console.log(hash.get("Gandalf"));

// var hash = new HashTable();
// hash.push("Gandalf", "gandalf@email.com");
// hash.push("John", "johnsnow@email.com");
// hash.push("Tyrion", "tyrion@email.com");
// hash.push("Aaron", "aaron@email.com");
// hash.push("Donnie", "donnie@email.com");
// hash.push("Ana", "ana@email.com");
// hash.push("Jonathan", "jonathan@email.com");
// hash.push("Sue", "sue@email.com");
// hash.push("Mindy", "mindy@email.com");
// hash.push("Paul", "paul@email.com");
// hash.push("Nathan", "nathan@email.com");
// hash.print();
// console.log(hash.get("Jonathan"));
// console.log(hash.get("Sue"));