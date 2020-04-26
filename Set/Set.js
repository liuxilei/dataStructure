function Set() {
    var items = {};
    //如果值在集合中，返回true，否则返回false
    // this.has = function(value) {
    //     return value in items;
    // };
    this.has = function(value) {
        return items.hasOwnProperty(value);
    };
    //向集合添加一个新的项
    this.add = function(value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    };
    //从集合移除一个值
    this.remove = function(value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    };
    //移除集合中的所有项
    this.clear = function() {
        items = {};
    };
    //返回集合所包含元素的数量。与数组的length属性类似
    this.size = function() {
        return Object.keys(items).length;
    };
    //返回一个包含集合中所有值的数组
    this.values = function() {
        return Object.keys(items);
    };
    //并集操作
    this.union = function(otherSet) {
        var unionSet = new Set();
        var values = this.values();
        for (var i = 0;i < values.length;i++) {
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for (var i = 0;i < values.length;i++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    };
    //交集
    this.intersection = function(otherSet) {
        var intersection = new Set();
        var values = this.values();
        for (var i = 0;i < values.length;i++) {
            if (otherSet.has(values[i])) {
                intersection.add(values[i]);
            }
        }
        return intersection;
    };
    //差集
    this.difference = function(otherSet) {
        var differenceSet = new Set();
        var values = this.values();
        for (var i = 0;i < values.length;i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    }
    //是否为otherSet的子集
    this.subset = function(otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        } else {
            var values = this.values();
            for (var i = 0;i < values.length;i++) {
                if (!otherSet.has(values[i])) {
                    return false;
                }
            }
            return true;
        }
     }
}

// var set = new Set();
// console.log("向集合塞入元素1",set.add(1));
// console.log("集合set", set.values());
// console.log("集合set是否有1元素", set.has(1));
// console.log("集合set元素个数", set.size());
// console.log("向集合塞入元素2",set.add(2));
// console.log("集合set", set.values());
// console.log("集合set是否有2元素", set.has(2));
// console.log("集合set元素个数", set.size());
// console.log("删除集合中元素1", set.remove(1));
// console.log("集合set",set.values());
// console.log("删除集合中元素2", set.remove(2));
// console.log("集合set",set.values());

// var setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);

// var setB = new Set();
// setB.add(3);
// setB.add(4);
// setB.add(5);
// setB.add(6);
// var unionAB = setA.union(setB);
// console.log(unionAB.values());

var setA = new Set();
setA.add(1);
setA.add(2);

var setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

var setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);

// var intersectionAB = setA.intersection(setB);
// console.log(intersectionAB.values());

console.log(setA.subset(setB));
console.log(setA.subset(setC));


