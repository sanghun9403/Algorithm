function solution(array) {
    let answer = [];
    array.forEach((e) => {
        answer.push(String(e).match(/7/g))
    })
    return answer.join("").replaceAll(',',"").length
    // return = array.join('').split('7').length-1
}