// npm - global command, comes with node
//npm --version

// localdependency - use it only inthis paticular project
//npm i <packagrName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1,[2,[3,[4,[5]]]]]
const newitems = _.flatMapDeep(items)
console.log(newitems)