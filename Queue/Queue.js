//队列
function Queue() {
    var items = [];
    //向队伍尾部添加一个新的项
    this.enqueue = function(element) {
        items.push(element);
    };
    //移除队列的第一项，并返回被移除的元素
    this.dequeue = function() {
        return items.shift();
    };
    //返回队列中的第一个元素
    this.front = function() {
        return items[0];
    };
    //队列是否为空
    this.isEmpty = function() {
        return items.length === 0;
    };
    //队列包含的元素个数
    this.size = function() {
        return items.length;
    };
    //打印
    this.print = function() {
        console.log(items.toString());
    };
}

// var queue = new Queue();
// console.log(queue.isEmpty());
// queue.enqueue("John");
// queue.enqueue("Jack");
// queue.enqueue("Camila");
// queue.print();
// console.log(queue.size());
// console.log(queue.isEmpty());
// queue.dequeue();
// queue.dequeue();
// queue.print();

function PriorityQueue() {
    var items = [];
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.isEmpty = function() {
        return items.length === 0;
    }

    this.enqueue = function(element, priority) {
        var queueElement = new QueueElement(element, priority);

        if (this.isEmpty()) {
            items.push(queueElement);
        } else {
            var added = false;
            for (var i = 0;i < items.length;i++) {
                if (queueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
            if (!added) {
                items.push(queueElement);
            }
        }
    }
    this.print = function() {
        console.log(JSON.stringify(items));
    };
}

// var priorityQueue = new PriorityQueue();
// priorityQueue.enqueue("John", 2);
// priorityQueue.enqueue("Jack", 1);
// priorityQueue.enqueue("Camila", 1);
// priorityQueue.print();

/**
 * @param nameList 参与人数
 * @param num 传递次数
 */
function hotPotato(nameList, num) {
    var queue = new Queue();
    for (var i = 0;i < nameList.length;i++) {
        queue.enqueue(nameList[i]);
    }
    var eliminated = "";
    while(queue.size() > 1) {
        for (var i = 0;i < num;i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + "在击鼓传花游戏中被淘汰。");
    }
    return queue.dequeue();
}

// var names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
// var winner = hotPotato(names, 2);
// console.log("胜利者:", winner);