/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => b - a);
    s.sort((a, b) => b - a);

    let content = 0;

    for (let i = 0, j = 0; i < g.length && j < s.length;) {
        if (s[j] >= g[i]) {
            content++;
            i++;
            j++;
        } else {
            i++;
        }
    }

    return content;
};