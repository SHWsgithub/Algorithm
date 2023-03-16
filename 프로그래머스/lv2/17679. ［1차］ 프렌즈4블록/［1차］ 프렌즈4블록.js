function solution(m, n, board) {
    board = board.map(row => row.split(''));

    const findTargets = () => {
        const targets = new Set();
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const block = board[i][j];
                if (block === '.') continue;
                if (block === board[i][j+1] && block === board[i+1][j] && block === board[i+1][j+1]) {
                    targets.add(`${i},${j}`);
                    targets.add(`${i},${j+1}`);
                    targets.add(`${i+1},${j}`);
                    targets.add(`${i+1},${j+1}`);
                }
            }
        }
        return targets;
    };

    const deleteBlocks = (targets) => {
        targets.forEach(pos => {
            const [i, j] = pos.split(',').map(Number);
            board[i][j] = '.';
        });

        for (let j = 0; j < n; j++) {
            let emptyCnt = 0;
            for (let i = m - 1; i >= 0; i--) {
                if (board[i][j] === '.') {
                     emptyCnt++;
                } else if (emptyCnt > 0) {
                    board[i+emptyCnt][j] = board[i][j];
                    board[i][j] = '.';
                }
            }
        }   

        return targets.size;
    };

    let answer = 0;
    while (true) {
        const targets = findTargets();
        if (targets.size === 0) break;
        answer += deleteBlocks(targets);
    }

    return answer;
}