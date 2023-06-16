function solution(arr, k) {
    // let answer = []
    // for(i = 0; i < arr.length; i++) {
    //     if (k % 2 === 0) {
    //         answer.push(arr[i] + k)
    //     } else {
    //         answer.push(arr[i] * k)
    //     }
    // }
    
    return arr.map((e) => k % 2 === 0 ? e + k : e * k )

// const solution = (arr, k) => arr.map(v => k % 2 ? v * k : v + k)
}