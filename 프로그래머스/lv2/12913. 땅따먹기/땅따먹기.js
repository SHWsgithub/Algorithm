function solution(land) {
    const sums = Array.from(Array(land.length), () => Array(4).fill(0));
    sums[0] = land[0];

    for (let i = 1; i < land.length; i++) {
        for (let j = 0; j < 4; j++) {
            for (let k = 0; k < 4; k++) {
                if (j === k) continue;
                sums[i][j] = Math.max(sums[i][j], sums[i-1][k] + land[i][j]);
            }
        }
    }

    return Math.max(...sums[land.length-1]);
}