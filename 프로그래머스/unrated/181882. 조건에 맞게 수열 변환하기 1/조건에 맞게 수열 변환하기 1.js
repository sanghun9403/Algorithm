function solution(arr) {
    let answer = [];
    arr.map(e => {
        if (e >= 50 && e % 2 === 0) answer.push(e / 2)
        else if (e < 50 & e % 2 !== 0) answer.push(e * 2)
        else answer.push(e)
    })
    return answer;
    
   // return arr.map(num => {
   //      if(num >= 50 && !(num % 2)) return num / 2;
   //      if(num < 50 && num % 2) return num * 2;
   //      return num;
   //  })
}