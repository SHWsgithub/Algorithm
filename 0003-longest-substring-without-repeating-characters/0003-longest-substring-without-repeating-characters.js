/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let start = 0, maxLen = 0;
  const map = new Map();

  for(let i = 0; i < s.length; i++) {
      
      let ch = s[i];
    
      if(map.get(ch) >= start) start = map.get(ch) + 1;
      
      map.set(ch, i);
    
      maxLen = Math.max(maxLen, i - start + 1)
  }

  return maxLen;
};