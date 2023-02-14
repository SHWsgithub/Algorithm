/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let result = 0;
    let oddCheck = false;
    let string = new Map();
    
    for (let char of s) {
        string.set(char, (string.get(char) || 0) + 1);
    }


    for (let count of string.values()) {
        if (count % 2 === 0) {
            result += count;
        } else {
            result += count - 1;
            oddCheck = true;
        }
    }

    return oddCheck ? result + 1 : result;
};