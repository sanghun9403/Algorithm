function solution(myString, pat) {
    let word = pat.toLowerCase()
    let str = myString.toLowerCase()
    return str.includes(word) ? 1 : 0
}               