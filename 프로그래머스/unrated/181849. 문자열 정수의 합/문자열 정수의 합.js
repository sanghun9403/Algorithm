function solution(num_str) {
    return num_str.split("").reduce((acc, cur) => acc * 1 + cur * 1, 0)
}