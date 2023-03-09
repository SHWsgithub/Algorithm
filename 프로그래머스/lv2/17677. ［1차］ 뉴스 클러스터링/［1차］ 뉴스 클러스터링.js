function solution(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    const map1 = new Map();

    for (let i = 0; i < str1.length - 1; i++) {
        const pair = str1.slice(i, i + 2);
        if (pair.match(/[a-z]{2}/)) {
            map1.set(pair, (map1.get(pair) || 0) + 1)
        }
    }

    const map2 = new Map();

    for (let i = 0; i < str2.length - 1; i++) {
        const pair = str2.slice(i, i + 2);
        if (pair.match(/[a-z]{2}/)) {
            map2.set(pair, (map2.get(pair) || 0) + 1)
        }
    }

    const keys1 = map1.keys();
    const keys2 = map2.keys();

    const set = new Set([...keys1, ...keys2]);
    let union = 0;
    let intersection = 0;

    set.forEach(key => {
        const count1 = map1.get(key) || 0;
        const count2 = map2.get(key) || 0;
        union += Math.max(count1, count2);
        intersection += Math.min(count1, count2);
    })

    return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}