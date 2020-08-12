//单向链表
function LinkedList() {
    var Node = function (element) {
        this.element = element;
        this.next = null;
    };
    //链表长度
    var length = 0;
    //第一个节点的引用
    var head = null;
    //向列表尾部添加一个新的项
    this.append = function (element) {
        //实例一个当前插入节点
        var node = new Node(element), //链表最后一个节点的next始终为null
            current; //遍历链表中的每一项时候，声明
        //当链表为空的时候，第一个节点的指向指向插入当前插入节点
        if (head === null) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };
    //向列表的特定位置插入一个新的项
    this.insert = function (position, element) {
        //检查越界值
        if (position >= 0 && position <= length) {
            var node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0) {
                //插入到链表头部的话，使得当前节点next指向之前的头部，
                //之前的头部为当前节点
                node.next = current;
                head = node;
            } else {
                //遍历链表每一项到要插入位置前，previous保存前一个值，current保存下一个值
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                //这里设置要插入位置的前一个值的next指向插入节点，插入节点的next指向插入后的那一个节点
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    };
    //从列表的特定位置移出一项
    this.removeAt = function (position) {
        //先检测要移除位置是否正确
        if (position > -1 && position < length) {
            var current = head,
                previous,
                index = 0;
            if (position === 0) {
                //当移除的项为第一项时，把指向第一项的head指向第二项即可
                head = current.next;
            } else {
                //遍历索引从头开始到要移除项之前，previous保存前一项，current保存遍历时候的下一项
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                //这里current为要移除的那一项，而这时候把前一项的next指向移除项的next，则完成移除功能
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
    //从列表中移除一项
    this.remove = function (element) {
        var index = this.indexOf(element);
        return this.removeAt(index);
    };
    //返回元素在列表中的索引
    this.indexOf = function (element) {
        var current = head;
        index = 0;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    //判断链表是否为空
    this.isEmpty = function () {
        return length === 0;
    };
    //返回链表包含的元素个数
    this.size = function () {
        return length;
    };
    //输出元素的值
    this.toString = function () {
        var current = head,
            string = '';
        while (current) {
            string += ' ' + current.element;
            current = current.next;
        }
        return string;
    };
    //获取链表第一个元素
    this.getHead = function () {
        return head;
    };
}

// var list = new LinkedList();
// console.log("向链表插入", 15);
// list.append(15);
// console.log("向链表插入", 10);
// list.append(10);
// console.log("链表长度", list.size());
// console.log("删除链表第二项","删除值的为：",list.removeAt(1));
// console.log("链表长度",list.size());
// console.log("向链表第一位插入", 15);
// list.insert(0, 1);
// console.log("链表长度",list.size());
// // console.log("删除链表第一项","删除值的为：",list.removeAt(0));
// console.log(list.toString());
// console.log(list.indexOf(15));
// console.log("向链表插入", 111);
// list.append(111);
// console.log(list.indexOf(111));

//双向链表
function DoublyLinkedList() {
    var Node = function (element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    };
    var length = 0;
    var head = null;
    var tail = null; //链表最后一项
    //向任意位置插入一个新元素的算法
    this.insert = function (position, element) {
        //检查越界值
        if (position >= 0 && position <= length) {
            var node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0) {
                //在第一个位置添加
                //链表中是否有值
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    //如果有值，当前新插入的节点next指向current(即之前的头部节点)，current(即之前的头部节点)prev指向当前node，
                    //然后再重新设置头部为当前节点
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) {
                //如果插入的位置为最后一项，则把current暂时指向之前的最后一个值，
                //然后current的next指向当前插入的node，node的prev指向current，设置node为最后一个值
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                //从头迭代链表的每一项直到要插入的位置
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                //这时候previous指向前一个值，current表示要插入位置之前的值
                //设置node的next指向插入位置前的那个值
                //这里把彼此间的前后确定好
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            length++;
            return true;
        } else {
            return false;
        }
    };
    //从任意位置移除元素
    this.removeAt = function (position) {
        //检查越界值
        if (position > -1 && position < length) {
            var current = head,
                previous,
                index = 0;
            //移除第一项
            if (position === 0) {
                head = current.next;
                //如果只有一项，更新tail
                if (length === 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position === length - 1) {
                //最后一项
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                //将previous与current的下一项链接起来-跳过current
                previous.next = current.next;
                current.next.prev = previous;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
}
