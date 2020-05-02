//my solutin

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length > 0) {
        return this.stack.pop();
    } else {
        return null;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length > 0) {
        return this.stack[this.stack.length - 1];
    } else {
        return null;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.stack.length > 0) {
        return this.stack.reduce((value, currentVlue) => value > currentVlue ? currentVlue : value)
    } else {
        return null;
    }
    
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

 //others

 var MinStack = function() {
    this.items = []
    this.min = null
};

// 进栈
MinStack.prototype.push = function(x) {
    if(!this.items.length) this.min = x 
    this.min = Math.min(x, this.min)
    this.items.push(x) 
};

// 出栈
MinStack.prototype.pop = function() {
    let num = this.items.pop() 
    this.min = Math.min(...this.items)
    return num
};

// 获取栈顶元素
MinStack.prototype.top = function() {
    if(!this.items.length) return null
    return this.items[this.items.length -1] 
};

// 检索栈中的最小元素
MinStack.prototype.getMin = function() {
    return this.min
};
