function solution(numbers) {
    let answer = numbers.reduce(function add(sum, val) {
        return sum + val / numbers.length;
    }, 0)
    return answer;
}