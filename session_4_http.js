const http = require('http')
const fs   = require('fs')
const welcome = require('./utility')

var port = 3000
var host = '127.0.0.1'


const server = http.createServer((req,res)=>{
    console.log(req);
    res.end(welcome("Stranger"))
})

server.listen(port,host,()=>{
    console.log(`Listening on http://${host}:${port}`)
})