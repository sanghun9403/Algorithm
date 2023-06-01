function solution(id_pw, db) {
    let answer = '';
    for(i of db) {
        if(id_pw[0] === i[0] && id_pw[1] === i[1]) {
            answer = "login";
            break;
        } else if (id_pw[0] === i[0] && id_pw[1] !== i[1]) {
            answer = "wrong pw";
            break;
        } else {
            answer = "fail";
        }
    }
     return answer;
}