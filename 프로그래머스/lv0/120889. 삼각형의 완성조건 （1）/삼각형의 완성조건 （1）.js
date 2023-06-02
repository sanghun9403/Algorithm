function solution(sides) {
    // let answer = 0;
    // sides.sort((a, b) => a - b);
    // let max = sides.pop();
    // console.log(max)
    // return max >= sides[0] + sides[1] ? answer = 2 : answer = 1;
    let max = Math.max(...sides)
 
    let el = sides.reduce((acc, cur) => acc + cur, 0);
    return max >= (el - max) ? 2 : 1
}