function solution(arr, queries) {
    queries.forEach(([a, b, c]) => {
        for(i = a; i <= b; i++) {
            if(i % c === 0) arr[i]++
        }
    })
    return arr
    
    // for(let [s, e, k] of queries) {
    // for(let i = s; i <= e; i++) {
    //     if(i % k === 0) arr[i]++;
    // }
    // }
    // return arr;
    
    // return queries.reduce((bucket, [s, e, k]) => {
    // for (let i = s; i <= e; i += 1) {
    //     if (i % k === 0) bucket[i] += 1
    // }
    // return bucket
    // }, [...arr])
}