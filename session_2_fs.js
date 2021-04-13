// Make sure to rad the docs for this module at nodejs.org
const fs = require('fs')    // This module is used for file handling

//For reading from file
var textIn = fs.readFileSync('./temp/temp.txt','utf-8')
console.log(textIn)

var name = "Avinash"
var textOut = `Hello ${name}, it's been a while since we met.\n If you don't mind can we meet tomorrow`
//For writing to the file
fs.writeFileSync('./temp/temp.txt',textOut);



