function solution(my_string, n) {
    let reverse = my_string.split("").reverse().join("")
    let answer = reverse.substring(0, n).split("").reverse().join("")
   
    return String(answer)
}