function solution(money) {
    let change = money % 5500
    return [Math.floor(money/5500), change]
}