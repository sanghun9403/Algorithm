function solution(num_list, n) {  
    // return num_list.filter((_, i) => i % n === 0)
    
    let answer = [];
    for (i = 0; i < num_list.length; i++) {
        if (i % n === 0) {
            answer.push(num_list[i])
        }
    }
    return answer
}