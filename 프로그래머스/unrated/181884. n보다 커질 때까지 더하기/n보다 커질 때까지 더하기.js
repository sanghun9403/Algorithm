function solution(numbers, n) {
    // let sum = 0;
    // for (i = 0; i < numbers.length; i++) {
    //     sum += numbers[i]
    //     if (sum > n) {
    //         return sum
    //     }
    // }
    let answer = 0
    let i = 0
    while (answer <= n) {
        answer += numbers[i++]
    }
    return answer
}