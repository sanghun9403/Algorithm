function solution(price) {
    let answer = 0;
    if (price >= 100000 && price < 300000) {
        answer = Math.floor(price * 0.95);
    } else if (price >= 300000 && price < 500000) {
        answer = Math.floor(price * 0.9);
    } else if (price >= 500000 && price <= 1000000) {
        answer = Math.floor(price * 0.8);
    } else {
        answer = price;
    }
    return answer;
    
    // price >= 500000 ? price = Math.floor(price * 0.8) : (price >= 300000 ? price = Math.floor(price * 0.9) : (price >= 100000 ? price = Math.floor(price * 0.95) : price))
}