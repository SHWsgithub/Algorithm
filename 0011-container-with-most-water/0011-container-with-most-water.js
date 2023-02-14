/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let store = 0;
    let start = 0;
    let end = height.length - 1;

    while (start < end) {
        store = Math.max(store, Math.min(height[start], height[end]) * (end - start));
        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }

    return store;
};