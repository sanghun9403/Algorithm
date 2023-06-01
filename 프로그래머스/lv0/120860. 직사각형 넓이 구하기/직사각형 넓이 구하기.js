function solution(dots) {
    let x;
    let y;
    dots.sort();
    x = dots[3][0] - dots[0][0];
    y = dots[3][1] - dots[0][1];
    return Math.abs(x * y); 
    //전부다 -일때 예외사항 
}