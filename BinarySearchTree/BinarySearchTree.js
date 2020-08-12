//二叉搜索树
function BinarySearchTree() {
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };
    var root = null;

    //插入逻辑的辅助函数
    //node 当前节点
    //newNode 新接单
    var insertNode = function (node, newNode) {
        //如果新节点的键小于当前节点
        if (newNode.key < node.key) {
            //并且当前节点的左侧子节点无值，则插入到该位置
            if (node.left === null) {
                node.left = newNode;
                //否则以当前节点的做节点进行继续比较
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    //中序遍历的辅助函数
    var inOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    };

    //前序遍历的辅助函数
    var preOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    };

    //后序遍历的辅助函数
    var postOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    };

    var minNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    };

    var maxNode = function (node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    };

    var searchNode = function (node, key) {
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            return searchNode(node.left, key);
        } else if (key > node.key) {
            return searchNode(node.right, key);
        } else {
            return true;
        }
    };

    //删除节点的辅助函数
    var removeNode = function (node, key) {
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        } else {
            //键等于node.key 找到该节点了
            //第一种情况————————一个叶节点，没有子节点
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            //第二种情况————————一个只有一个子节点的节点
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            //第三种情况————————一个有两个子节点的节点
            var aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    };

    //向树中插入一个新的键
    this.insert = function (key) {
        var newNode = new Node(key);
        //树的根节点不存在，新插入的节点即为根节点，否则向树上插入新节点
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    //在树中查找一个键，如果节点存在，则返回true；如果不存在，则返回false
    this.search = function (key) {
        return searchNode(root, key);
    };

    //通过中序遍历方式遍历所有节点
    //中序遍历是一种以上行顺序访问BST所有节点的遍历方式，也就是从最小到最大的顺序访问所有节点
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback);
    };

    //通过前序遍历方式遍历所有节点
    //前序遍历是以优先于后代的顺序访问每个节点的
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback);
    };

    //通过后序遍历方式遍历所有节点
    //后序遍历是先访问节点的后代节点，再访问节点本身
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root, callback);
    };

    //返回树中最小的值/键
    this.min = function () {
        return minNode(root);
    };

    //返回树中最大的值/键
    this.max = function () {
        return maxNode(root);
    };

    //从树中移除某个键
    this.remove = function (key) {
        //左侧的root表示查询的上一级node，
        root = removeNode(root, key);
    };
}

var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
function printNode(value) {
    console.log(value);
}
//tree.inOrderTraverse(printNode);
//tree.preOrderTraverse(printNode);
tree.postOrderTraverse(printNode);
