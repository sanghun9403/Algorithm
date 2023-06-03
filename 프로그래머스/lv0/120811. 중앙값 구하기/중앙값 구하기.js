function solution(array) {
    array.sort((a, b) => a - b);
    let median = Math.floor(array.length/2)
    return array[median]
    // 짝수인 경우 return (array[median-1] + array[median]) / 2
}