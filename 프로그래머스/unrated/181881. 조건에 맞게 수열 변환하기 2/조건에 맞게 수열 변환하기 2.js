function solution(arr) {
    let newArr = [];
    let cnt = 0;
    
    while (1) {
        newArr = [];
        arr.forEach((e, idx) => {
            if(e >= 50 && e % 2 === 0) {
                newArr.push(e / 2) 
            } else if(e < 50 && e % 2 !==0) {
                newArr.push(e * 2 + 1)
            } else {
                newArr.push(e)
            } 
        })
    if (newArr.join("") === arr.join("")) {
        break;
    }
    arr = [...newArr]
    cnt++
    }

    return cnt;
}