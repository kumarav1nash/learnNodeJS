const EventEmitter = require('events');

var url = 'http://127.0.0.1:3000/'

class Logger extends EventEmitter{

    log(message){
        //send http request
        console.log(message)
    
        //Raise an event
        this.emit('msgLogged',{id:1,url:url});
    
    }
}

module.exports = Logger;

