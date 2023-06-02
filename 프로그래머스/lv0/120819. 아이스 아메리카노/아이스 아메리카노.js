function solution(money) {
    let answer = [];
    let change = money % 5500
    return [Math.floor(money/5500), change]
}