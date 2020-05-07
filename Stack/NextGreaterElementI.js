//下一个更大元素 I

//My Solution

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let result = [];
    const getIndex = (arr, value) => {
        let index;
        arr.map((item, i) => {
            if (item === value) {
                index = i;
            }
        });
        return index;
    }
    for(let i = 0;i < nums1.length;i++) {
        for (let j = getIndex(nums2, nums1[i]);j < nums2.length;j++) {
            if (nums2[j] > nums1[i]) {
                result.push(nums2[j]);
                break;
            } else if (j === nums2.length - 1){
                result.push(-1);
            }
        }
    }
    return result;
};

//others
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    return nums1.map(cur => {
        let t = nums2.indexOf(cur) //获取nums1中的当前值（cur）在nums2中位置
        for (t, len = nums2.length; t < len; t++){ //循环nums2，从t位置开始
            if (nums2[t] > cur){ //如果t位置 右侧有比cur大的值  就返回；如果此for循环完之后没有发现比cur更大的值，则返回-1
                return nums2[t]
            }
        }
        return -1
    })
};


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const { length } = nums1;
    let result = [];
    for(let i = 0; i < length; i++){
        let index = nums2.indexOf(nums1[i]);
        let findexI = nums2.findIndex((item,idx) => item > nums1[i] && index < idx);
        findexI > -1 ? result.push(nums2[findexI]) : result.push(findexI)
    }
    return result;
};
