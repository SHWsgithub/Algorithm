function solution(n) {
    const mod = 1000000007;
    let dp = [1, 2];
    
    if (n === 1 && n === 2) dp[n - 1];

    for (let i = 2; i < n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % mod;
    }

    return dp[n - 1];
}