//栈
function Stack() {
    var items = [];
    //添加元素到栈顶
    this.push = function(element) {
        items.push(element);
    };
    //移除栈顶的元素
    this.pop = function() {
        return items.pop();
    };
    //返回栈顶的元素
    this.peek = function() {
        return items[items.length - 1];
    }
    //判断栈内是否有元素
    this.isEmpty = function() {
        return items.length === 0;
    };
    //查看栈的元素个数
    this.size = function() {
        return items.length;
    };
    //清空栈
    this.clear = function() {
        items = [];
    };
    //打印栈
    this.print = function() {
        console.log(items.toString());
    };
}

module.exports = Stack;

function divideBy2(decNumber) {
    var remStack = new Stack(),
        rem,
        binaryString = "";
    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}

// console.log(divideBy2(233));
// console.log(divideBy2(10));
// console.log(divideBy2(1000));


function baseConverter(decNumber, base) {
    var remStack = new Stack(),
        rem,
        baseString = "",
        digits = "0123456789ABCDEF";
    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }
    return baseString;
}

// console.log(baseConverter(100345, 2));
// console.log(baseConverter(100345, 8));
// console.log(baseConverter(100345, 16));