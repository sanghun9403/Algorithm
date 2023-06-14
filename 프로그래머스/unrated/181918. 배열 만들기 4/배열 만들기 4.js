function solution(arr) {
    let stk = [];
    
    for(let i = 0; i < arr.length;) {
        if (arr[i] <= stk[stk.length-1]) {
            stk.pop()
        } else if (arr[i] > stk[stk.length-1] || []) {
            stk.push(arr[i])
            i++
        }
    } 
    // let i = 0
    // while(i < arr.length) {
    //     if (arr[i] <= (stk[stk.length-1] || 0)) {
    //         stk.pop()
    //     } else if (arr[i] >= (stk[stk.length-1] || 0)) {
    //         stk.push(arr[i])
    //         i++
    //     }
    //  }
    return stk;
}