function solution(letter) {
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    
    let answer = '';
    letter.split(" ").map(e => answer += morse[e])
    return answer;
    
    //풀이 2)
    // for(let key in morse) {
    // for(key of letter) {
    // answer += morse[key];
    // if(answer.length === letter.length) return answer;
    // }
    // }

    //풀이 3)
    // for(let key of letter) {
    // for(i in morse) {
    // if(key === i) answer += morse[i];
    // }
    // }
    // return answer;
    // }
}