/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const visited = new Set();
    
    const recursion = (curIndex) => {
        if (visited.has(curIndex) || curIndex < 0 || curIndex >= arr.length) {
          return false;
        }
        visited.add(curIndex);
        if (arr[curIndex] === 0) {
          return true;
        }
        return recursion(curIndex + arr[curIndex]) || recursion(curIndex - arr[curIndex]);
    }  
    
    return recursion(start);
};