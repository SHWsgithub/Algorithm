/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const n = s.length;
  let maxLen = 0;
  let left = 0;
  const seen = {};

  for (let right = 0; right < n; right++) {
    if (s[right] in seen) {
      // if s[right] is a repeat character, move left pointer to the next index of the first occurrence
      left = Math.max(left, seen[s[right]] + 1);
    }
    // update the index of the most recent occurrence of s[right]
    seen[s[right]] = right;
    // update the maximum length of non-repeating characters
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};