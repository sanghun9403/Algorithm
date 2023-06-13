function solution(arr) {
    let first = arr.indexOf(2)
    let last = arr.lastIndexOf(2)
    return arr.includes(2) ? arr.slice(first, last + 1) : [-1]
}