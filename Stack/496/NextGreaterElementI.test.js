const nextGreaterElement = require('./NextGreaterElementI');

describe('下一个更大元素 I', () => {
    test('nextGreaterElement方法测试', () => {
        let nums1 = [4, 1, 2];
        let nums2 = [1, 3, 4, 2];
        expect(nextGreaterElement(nums1, nums2)).toEqual([-1, 3, -1]);

        let nums3 = [2, 4];
        let nums4 = [1, 2, 3, 4];
        expect(nextGreaterElement(nums3, nums4)).toEqual([3, -1]);
    });
});
