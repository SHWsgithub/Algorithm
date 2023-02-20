/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {   
    nums = nums.map(num => num.toString());
    
    nums.sort((a, b) => {
        let exam1 = a + b;
        let exam2 = b + a;
        for(let i = 0; i < exam1.length; i++) {
            if(exam1[i] > exam2[i]) {
                return -1;
            } else if (exam1[i] < exam2[i]) {
                return 1;
            }
        }
        return 0;
    });

    if (nums[0] === '0') {
        return '0';
    }

    return nums.join('');
}