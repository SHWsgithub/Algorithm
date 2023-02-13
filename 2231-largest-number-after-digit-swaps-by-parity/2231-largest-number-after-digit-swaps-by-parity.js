/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {
    let nums = num.toString().split('');

    let evens = nums.filter(x => x % 2 === 0).sort((a,b) => b-a);
    let odds = nums.filter(x => x % 2 !== 0).sort((a,b) => b-a);
    
    let maxNum = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            maxNum.push(evens.shift());
        }
        else {
            maxNum.push(odds.shift());
        }
    }
    
    return maxNum.join('');
};