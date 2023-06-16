function solution(my_string, alp) {
    // let capital = alp.toUpperCase();
    // let answer = my_string.replaceAll(alp, capital)
    // return answer
    return my_string.replaceAll(alp, alp.toUpperCase())
}