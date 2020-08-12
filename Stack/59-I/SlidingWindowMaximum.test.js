const maxSlidingWindow = require('./SlidingWindowMaximum');

describe('滑动窗口的最大值', () => {
    it('maxSlidingWindow', () => {
        let nums = [1, 3, -1, -3, 5, 3, 6, 7],
            k = 3;
        expect(maxSlidingWindow(nums, k)).toEqual([3, 3, 5, 5, 6, 7]);
    });
});
