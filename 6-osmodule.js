const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)


// methods retiurns the system uptime in secounds

console.log(`the system uptime is ${os.uptime()}secounds`)

const currentOS ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

}
console.log(currentOS)