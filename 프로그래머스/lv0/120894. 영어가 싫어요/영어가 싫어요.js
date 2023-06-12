function solution(numbers) {
    let obj = {
        zero : 0, one : 1, two : 2, three : 3, four : 4,
        five : 5, six : 6, seven : 7, eight : 8, nine : 9
    };
    
    
    let num = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (val) => {
        return obj[val]
    })
    
    
    return Number(num);
}