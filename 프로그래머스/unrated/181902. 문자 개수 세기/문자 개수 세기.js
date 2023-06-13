function solution(my_string) {
    let answer = Array(52).fill(0);
    my_string.split("").forEach((e) => {
        if(e.charCodeAt() <= 90) {
            answer[e.charCodeAt() - 65]++;
        } else {
            answer[e.charCodeAt() - 71]++;
        }
    })
    return answer;
}