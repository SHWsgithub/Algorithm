/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    while(k--) {
        let maxNum = Math.max(...gifts);
        const maxIndex = gifts.findIndex(gift => gift === maxNum);
        gifts[maxIndex] = Math.floor(Math.sqrt(maxNum));
    }
    
    return gifts.reduce((acc, cur) => acc + cur, 0);
};