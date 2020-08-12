var StockSpanner = function () {
    this.stack = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    this.stack.push(price);
    let sum = 0;
    for (let i = this.stack.length - 1; i >= 0; i--) {
        if (this.stack[i] <= price) {
            sum++;
        } else {
            break;
        }
    }
    return sum;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

module.exports = StockSpanner;
