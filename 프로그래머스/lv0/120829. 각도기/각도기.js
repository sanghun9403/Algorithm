function solution(angle) {
    let a = angle
    if (0 < a && a < 90) {
        return 1
    } else if (a === 90) {
        return 2
    } else if (90 < a && a < 180) {
        return 3
    } else {
        return 4
    }
}