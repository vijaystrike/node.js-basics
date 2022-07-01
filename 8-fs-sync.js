const { readFileSync, writeFileSync } = require("fs")

const first = readFileSync('./content/first.txt/','utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log('start')
writeFileSync(
    './content/result.txt',`here is the result :${first},${second}`)

    console.log('done with this task')
    console.log('starting next task')