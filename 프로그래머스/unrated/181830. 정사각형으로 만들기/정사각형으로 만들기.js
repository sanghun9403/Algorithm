function solution(arr) {
    let a = [];
    if(arr[0].length === arr.length) return arr
    if(arr[0].length < arr.length) {
        return arr.map(e => [...e, ...Array(arr.length-arr[0].length).fill(0)])
    }
    if(arr.length < arr[0].length) {
        for (i = 0; i < arr[0].length; i++) {
            a.push(0)
        }
        return [...arr, ...Array(arr[0].length - arr.length).fill(a)]
    }
}