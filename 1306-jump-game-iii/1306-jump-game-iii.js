/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const set = new Set();
    
    const recursion = (curIndex) => {
        if (set.has(curIndex) || curIndex < 0 || curIndex >= arr.length) {
          return false;
        }
        set.add(curIndex);
        if (arr[curIndex] === 0) {
          return true;
        }
        return recursion(curIndex + arr[curIndex]) || recursion(curIndex - arr[curIndex]);
    }  
    
    return recursion(start);
};