function solution(n, k) {
    const nums = n.toString(k).split('0');
    let count = 0;

    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    nums.forEach(num => {
        if (num === '') return;
        if (isPrime(parseInt(num))) count++;
    });

    return count;
}