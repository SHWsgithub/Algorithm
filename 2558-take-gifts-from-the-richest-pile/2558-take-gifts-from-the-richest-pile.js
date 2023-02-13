/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    for(let i = 0; i < k; i++) {
        const maxNum = Math.max(...gifts);
        
        const maxIndex = gifts.findIndex(gift => gift === maxNum);
        gifts[maxIndex] = Math.floor(Math.sqrt(maxNum));
    }
    
    return gifts.reduce((acc, cur) => acc + cur, 0);
};