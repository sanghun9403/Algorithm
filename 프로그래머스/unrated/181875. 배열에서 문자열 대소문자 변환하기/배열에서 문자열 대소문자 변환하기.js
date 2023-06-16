function solution(strArr) {
//     let answer = [];
//     for (i = 0; i < strArr.length; i++) {
//         if (i % 2 === 0) {
//             answer.push(strArr[i].toLowerCase());
//         } else {
//             answer.push(strArr[i].toUpperCase());
//         }
//     }
//     return answer;
    
     return strArr.map((v, i) => i % 2 === 0 ? v.toLowerCase() : v.toUpperCase());
}