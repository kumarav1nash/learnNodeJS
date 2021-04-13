const http = require('http')
const path = require('path')
const os = require('os')
const fs = require('fs')
const Logger  = require('./logger')




var logger = new Logger()
logger.on('msgLogged',(args)=>{
    console.log(`data recieved `,args)
})

logger.log("Logging data")







// const files = fs.readdirSync('./')
// console.log(files)

// fs.readdir('./',function(err,files){
//     if (err) {
//         console.log(`Error - ${err}`)
//     }
//     else {
//         console.log(`Result - ${files}`)
//     }
    
// })



// var pathObj = path.parse(__filename);
// var os_platform = os.platform()
// var os_total_memory = os.totalmem();
// var os_free_memory = os.freemem()
// console.log(os_platform)
// console.log(os_total_memory)
// console.log(os_free_memory)