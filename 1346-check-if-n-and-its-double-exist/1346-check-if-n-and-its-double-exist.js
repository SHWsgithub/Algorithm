/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const map = new Map();
    for(let i = 0; i < arr.length; i++) {
        if(map.has(arr[i] * 2) || map.has(arr[i] / 2)) {
            return true;
        }
        map.set(arr[i], i);
    }
    return false;
};