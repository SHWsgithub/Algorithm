function solution(priorities, location) {
    let answer = 0;
    const queue = priorities.map((priority, index) => ({index, priority}));
    let maxPriority = Math.max(...priorities);
    
    while (queue.length > 0) {
        const curr = queue.shift();
        if (curr.priority < maxPriority) {
            queue.push(curr);
        } else {
            answer++;
            if (curr.index === location) {
                break;
            }
            maxPriority = Math.max(...queue.map(doc => doc.priority));
        }
    }
    return answer;
}