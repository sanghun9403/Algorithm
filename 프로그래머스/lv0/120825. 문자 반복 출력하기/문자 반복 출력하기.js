function solution(my_string, n) {
    // let answer = '';
    // my_string.split("").forEach((a) => {
    //     answer += a.repeat(n)
    // })
    let answer = my_string.split("").map(a => a.repeat(n)).join("")
    // return Array.from(my_string).map(t => Array(n).fill(t)).flat().join('');  
    return answer;
}