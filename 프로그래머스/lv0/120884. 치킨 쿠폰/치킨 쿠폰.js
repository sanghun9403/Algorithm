function solution(chicken) {
    let answer = 0; // 주문 치킨 수
    let coupon = chicken; // 서비스 치킨 수
    
    while (coupon >= 10) {
        answer += Math.floor(coupon / 10)
        coupon = coupon % 10 + Math.floor(coupon / 10)
    }
    
    return answer
}