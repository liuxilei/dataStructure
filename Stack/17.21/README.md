## Volume of Histogram LCCI

Imagine a histogram (bar graph). Design an algorithm to compute the volume of water it could hold if someone poured water across the top. You can assume that each histogram bar has width 1.

![图示](./assert.png)

The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of water (blue section) are being trapped. Thanks Marcos for contributing this image!

**Example:**

    Input: [0,1,0,2,1,0,1,3,2,1,2,1]
    Output: 6

---

## 直方图的水量

给定一个直方图(也称柱状图)，假设有人从上面源源不断地倒水，最后直方图能存多少水量?直方图的宽度为 1。

![图示](./assert.png)

上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的直方图，在这种情况下，可以接 6 个单位的水（蓝色部分表示水）。 感谢 Marcos 贡献此图。

**示例:**

    输入: [0,1,0,2,1,0,1,3,2,1,2,1]
    输出: 6


## Others

思路：
缓存两端最大值，从最大值较小的一边进行储水结算、移动，并更新最大值。

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height < 3) {
        return 0;
    }

    let left = 0,
        right = height.length - 1,
        leftMax = height[left],
        rightMax = height[right],
        res = 0;
    
    while (left < right) {
        if (leftMax < rightMax) {
            res += leftMax - height[left++];
            leftMax = Math.max(height[left], leftMax);
        } else {    
            res += rightMax - height[right--];
            rightMax = Math.max(height[right], rightMax);
        }
    }

    return res;
};
```