function solution(lines) {
    let count = 0;
    let length = new Array(200).fill(0);
    for (i of lines) {
        for(j = i[0]; j < i [1]; j++) {
            length[j+100] += 1
        }
    }
    for(i of length) {
        if (i >= 2) {
            count++
        }
    }
    return count
  }