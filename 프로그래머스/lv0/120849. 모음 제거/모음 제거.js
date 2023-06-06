function solution(my_string) {
    let regExp = new RegExp(/[^aeiou]/g)
    if (!my_string.match(regExp)) {
        return ""
    } else {
        return my_string.match(regExp).join("")
    }
}