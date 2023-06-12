function solution(numbers, k) {
    let answer = 2 * k - 2;
    while(1) {
        if (answer < numbers.length) break;
        answer -= numbers.length
    }
    return answer + 1
}