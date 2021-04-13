
var welcome = function(name){
    var msg = ""
    if(name=="Raju"){
        msg =`Oye ${name}, pyar na kario dil toot jata hai`
    }else{
        msg = `Hello, ${name}! Welcome to the world of NodeJS`
    }

    return msg
}  

module.exports = welcome