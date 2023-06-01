function solution(num, total) {
    let pointNum = 0;
    let arr = [];
    let idx = 0;
    
    if (num % 2 !== 0) {
        pointNum = total / num;
        arr.push(pointNum);
        for(cnt=1; cnt<num; cnt+=2) {
            idx++;
            arr.push(pointNum + idx)
            arr.unshift(pointNum - idx)
        }
    } else {
        pointNum = total/(num/2)
        for(cnt=0, idx=0; cnt<num; cnt += 2, idx++) {
            arr.push(Math.ceil(pointNum/2) + idx)
            arr.unshift(Math.floor(pointNum/2)-idx)
        }
    } 
    return arr
}
        
    // 홀수일때는 total을 나눈 몫이 배열의 중앙값이고 양끝의 값은 중앙값의 *2
    //total/num = middle = (num[0] + num[num.length-1])/2
    // 짝수일때는 양끝 더한 후 * 2를 하면 total이 나옴 
    //total = (num[0] + num[num.length-1]) * 2