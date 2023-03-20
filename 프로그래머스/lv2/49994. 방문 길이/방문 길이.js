function solution(dirs) {
    const orders = {
        U: [0, 1],
        D: [0, -1],
        R: [1, 0],
        L: [-1, 0]
    };
  
    const set = new Set();
    let [x, y] = [0, 0];
  
    for (const dir of dirs) {
        const [mx, my] = orders[dir];
        const [nx, ny] = [x + mx, y + my];
    
        if (nx < -5 || nx > 5 || ny < -5 || ny > 5) {
            continue;
        }
    
        set.add(`${x}${y}${nx}${ny}`);
        set.add(`${nx}${ny}${x}${y}`);
        [x, y] = [nx, ny];
    }
  
    return set.size / 2;
}