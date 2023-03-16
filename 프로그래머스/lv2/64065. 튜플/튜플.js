function solution(s) {
    const tuplesStr = s.slice(2, -2).split('},{');

    const tuples = tuplesStr.map(tupleStr => tupleStr.split(',').map(numStr => parseInt(numStr)));

    tuples.sort((a, b) => a.length - b.length);

    const answer = [];
    for (const tuple of tuples) {
        for (const num of tuple) {
            if (!answer.includes(num)) {
                answer.push(num);
                break;
            }
        }
    }
    
    return answer;
}