function solution(n, t, m, p) {
    let answer = '';
    let numbers = '';
    let count = 0;
    let i = 0;
    
    while (numbers.length < t * m) {
        numbers += i.toString(n);
        i++;
    }

    for (let j = p - 1; j < numbers.length; j += m) {
        answer += numbers[j];
        count++;
        if (count === t) break;
    }

    return answer.toUpperCase();
}