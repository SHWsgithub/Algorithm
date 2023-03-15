function solution(n, m, section) {
    //20분까지
    let wall = new Array(n).fill(true);
    
    for (let i = 0; i < section.length; i++) {
        let start = section[i] - 1;
        wall[start] = false;
    }
    let answer = 0;
    
    let i = 0;
    
    while (i < n) {
        if (!wall[i]) {
            i += m;
            answer++;
        } else {
            i++;
        }
    }
    return answer;
}