function solution(arr, queries) {
//     queries.forEach(([a, b, c]) => {
//         for(i = a; i <= b; i++) {
//             if(i % c === 0) arr[i]++
//         }
//     })
//     return arr
    
    for(let [s, e, k] of queries) {
    for(let i = s; i <= e; i++) {
        if(i % k === 0) arr[i]++;
    }
    }
    return arr;
}