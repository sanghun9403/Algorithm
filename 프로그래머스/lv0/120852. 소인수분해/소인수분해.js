function solution(n) {
    let answer = [];
    for(i = 2; i <= n; i++) {
        if(n % i === 0) {
            if(i % answer[0] === 0 || i % answer[1] === 0) continue;
            answer.push(i)
            n /= i
        }
    }
    return answer;
}