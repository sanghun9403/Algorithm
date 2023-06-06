function solution(my_string, n) {
    let answer = '';
    my_string.split("").forEach((a) => {
        answer += a.repeat(n)
    })
    
    //filter
    return answer;
}