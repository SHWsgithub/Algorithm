function solution(a, b) {
    return Math.max(`${a}${b}`, Math.imul(2, Math.imul(a, b)))
}