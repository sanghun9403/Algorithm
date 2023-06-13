function solution(sides) {
    sides.sort((a, b) => a - b)
    let max = sides[1] + 1
    let answer = 0
    
    for(i = max; max < sides[0] + sides[1]; max++) answer++
    max = sides[1]
    for(i = sides[1] - sides[0] + 1; i <= max; i++) answer++
    
    return answer
    
    // sides.sort((a, b) => a - b)
    // answer = sides[0] + sides[0] - 1
}