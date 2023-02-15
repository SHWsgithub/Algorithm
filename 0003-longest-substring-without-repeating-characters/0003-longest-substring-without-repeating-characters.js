/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s === '') return 0;
    let substringArray = [];
    let substring = '';
    for(let i=0; i < s.length ; i++){
        if(!substring.includes(s[i])){
            substring += s[i];
        } else {
            substringArray.push(substring.length);
            i -= substring.length-1
            substring = s[i];
        }
   substring && substringArray.push(substring.length)
    }
    return Math.max(...substringArray);
};