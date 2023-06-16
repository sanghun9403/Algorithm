const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    let input = line.split(' ');
    if (input % 2 === 0) {
        console.log(`${input} is even`)
    } else {
        console.log(`${input} is odd`)
    }
})




