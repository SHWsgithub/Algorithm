/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {   
    nums = nums.map(num => num.toString());
    
    nums.sort((a, b) => {
        let order1 = a + b;
        let order2 = b + a;
        for(let i = 0; i < order1.length; i++) {
            if(order1[i] > order2[i]) {
                return -1;
            } else if (order1[i] < order2[i]) {
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