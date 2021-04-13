const fs = require('fs')


//this is asynchronous method to read file
fs.readFile('./temp/temp.txt','utf-8',(err,data1)=>{
    fs.readFile('./temp/start.txt','utf-8',(err1,data2)=>{
        console.log(`${data1}  ${data2}`);
    })
})
console.log("Reading Files...");
