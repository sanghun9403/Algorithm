function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    let area = [Math.floor(board[0]/2), Math.floor(board[1]/2)]
    
    for (key of keyinput) {
       if (key === "up") {
           y++;
           y > area[1] ? --y : y
       } else if (key === "down") {
           y--;
           y < -area[1] ? ++y : y
       } else if (key === "left") {
           x--;
           x < -area[0] ? ++x : x
       } else if (key === "right") {
           x++;
           x > area[0] ? --x : x         
       }
    }
    return [x, y]
}