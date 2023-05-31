function calGcd(a,b) { 
  return b ? calGcd(b, a % b) : a; 
                       // r
}
// 2개의 자연수 a,b에 대해서 a를 b로 나눈 나머지를 r이라 하면(단, a>b), a와 b의 최대공약수는 b와 r의 최대공약수와 같다.
// 1071 % 1029 = 42
// 1029 % 42 = 21
// 42는 21로 나누어 떨어지므로 1071과 1029의 최대공약수는 21

function solution(numer1, denom1, numer2, denom2) {
    let num = denom1 * numer2 + denom2 * numer1
    let denom = denom1 * denom2
    let gcd = calGcd(num, denom)
    
    return [num / gcd , denom / gcd]
}