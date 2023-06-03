function solution(n) {
    let num = String(n);
    let mapfn = (arg) => Number(arg);
    let newArr = num.split('').map(mapfn);
    let answer = newArr.reduce((acc, cur) => acc + cur, 0);
    return answer;
    
    // return n
    // .toString()
    // .split("")
    // .reduce((acc, cur) => acc + Number(cur), 0);
}