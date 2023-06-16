function solution(num_list) {
    let [x, y] = [...num_list].reverse()
    return [...num_list, x > y ? x - y : x * 2]
}