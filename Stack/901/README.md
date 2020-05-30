## Online Stock Span

Write a class `StockSpanner` which collects daily price quotes for some stock, and returns the span of that stock's price for the current day.

The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backwards) for which the price of the stock was less than or equal to today's price.

For example, if the price of a stock over the next 7 days were `[100, 80, 60, 70, 60, 75, 85]`, then the stock spans would be `[1, 1, 1, 2, 1, 4, 6]`.

 

**Example 1:**

    Input: ["StockSpanner","next","next","next","next","next","next","next"], [[],[100],[80],[60],[70],[60],[75],[85]]
    Output: [null,1,1,1,2,1,4,6]
    Explanation: 
    First, S = StockSpanner() is initialized.  Then:
    S.next(100) is called and returns 1,
    S.next(80) is called and returns 1,
    S.next(60) is called and returns 1,
    S.next(70) is called and returns 2,
    S.next(60) is called and returns 1,
    S.next(75) is called and returns 4,
    S.next(85) is called and returns 6.

    Note that (for example) S.next(75) returned 4, because the last 4 prices
    (including today's price of 75) were less than or equal to today's price.
 

**Note:**

1. Calls to StockSpanner.next(int price) will have 1 <= price <= 10^5.
2. There will be at most 10000 calls to StockSpanner.next per test case.
3. There will be at most 150000 calls to StockSpanner.next across all test cases.
4. The total time limit for this problem has been reduced by 75% for C++, and 50% for all other languages.

---

## 股票价格跨度

编写一个 `StockSpanner` 类，它收集某些股票的每日报价，并返回该股票当日价格的跨度。

今天股票价格的跨度被定义为股票价格小于或等于今天价格的最大连续日数（从今天开始往回数，包括今天）。

例如，如果未来7天股票的价格是 `[100, 80, 60, 70, 60, 75, 85]`，那么股票跨度将是 `[1, 1, 1, 2, 1, 4, 6]`。

 

**示例：**

    输入：["StockSpanner","next","next","next","next","next","next","next"], [[],[100],[80],[60],[70],[60],[75],[85]]
    输出：[null,1,1,1,2,1,4,6]
    解释：
    首先，初始化 S = StockSpanner()，然后：
    S.next(100) 被调用并返回 1，
    S.next(80) 被调用并返回 1，
    S.next(60) 被调用并返回 1，
    S.next(70) 被调用并返回 2，
    S.next(60) 被调用并返回 1，
    S.next(75) 被调用并返回 4，
    S.next(85) 被调用并返回 6。

    注意 (例如) S.next(75) 返回 4，因为截至今天的最后 4 个价格
    (包括今天的价格 75) 小于或等于今天的价格。
 

**提示：**

1. 调用 StockSpanner.next(int price) 时，将有 1 <= price <= 10^5。
2. 每个测试用例最多可以调用  10000 次 StockSpanner.next。
3. 在所有测试用例中，最多调用 150000 次 StockSpanner.next。
4. 此问题的总时间限制减少了 50%。


## My Solution

```javascript
var StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    this.stack.push(price);
    let sum = 0;
    for (let i = this.stack.length- 1;i >= 0;i--) {
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
```

## Others
1. 暴力法
在此不再赘述，每加入一个新元素即从后向前扫描并计数，遇到比自己大的元素则终止并返回这个计数。

2. 跨度法
既然是跨度问题，就抓住“跨度”这个概念。先在纸上画几个例题，试着找下规律。
举个例子，对于例子6，1，2，3，4，9，从后往前逆推一下，当我们新插入9的时候，如果发现前一位的4比9小，那么是否说明比9小的数量就等于比4小的数量加1？然而这是错的，因为首位的6比9小，却比4大，因此截止数字的4时候，比4小的数量中并不包含6与9的对比。然而却由此可以确定的是，从6后面的数字1开始一直到9之前的数字4之间的所有数字一定都比9小，因此我们可以直接借助4所存储的跨度值，准确地跳跃到数字6所在的位置去继续检测。随后会发现6依然比9小，所以对于数字9的跨度值而言，应该是数字4的跨度值加上数字6所存储的跨度值再加1。

继续类推，假如这个例子前面再扩展几个数字，变成1，8，2，3，6，1，2，3，4，9，则又可以从数字6所在的位置直接跳跃到数字8去继续重复上面的步骤。像这样优化以后的算法，由于跳跃的发生，则一定会拥有比暴力法更优的时间复杂度。

```javascript
var StockSpanner = function() {
    // 股价
    this.stockPrice = [];
    // 跨度值
    this.spanner = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    var count = 0;
    // 对第一个输入的价格进行处理
    if (this.spanner.length == 0) {
        this.spanner.push(1);
        this.stockPrice.push(price);
        return 1;
    }
    // 取最后一位作为下标
    var index = this.stockPrice.length - 1;
    // 循环向前，直到遇见比新插入的值更大的值
    while ((price >= this.stockPrice[index]) && (index >= 0)) {
        // 累加跨度值
        count += this.spanner[index];
        // 下标按跨度值跳跃
        index -= this.spanner[index];
        
    }
    // 最后加上新插入价格所带来的跨度值，为1
    count ++;
    // 把价格存起来
    this.stockPrice.push(price);
    // 把跨度值存起来
    this.spanner.push(count);

    return count;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
```