function solution(num_list, n) {
   let answer = [];
    for (let i = 0; i < num_list.length / n; i++) {
        answer.push(num_list.slice(i * n, i * n + n))
    }
    return answer
    //[0,1,2,3,4,5,6,7,8,9,10]
    //n이 3이면 0부터 2까지 짤라야하니까
    //slice([begin[,end]])
    //i*n 0번째부터
    //i*n+n 하면 3번째까지
    
}