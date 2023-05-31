function solution(s){
    var result = true;
    var str = s.toLowerCase();
    var count = 0;
    
    for (var i = 0; i < s.length; i++)
        if (str[i] === "p") count++;
        else if (str[i] === "y") count--;
    
    return (count === 0) ? true : false
}