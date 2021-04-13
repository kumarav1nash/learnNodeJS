var userName="";

var argsArray = process.argv                                                    //storing argument value to array

var welcome = (name)=>console.log(`Hello, ${name}! Welcome to the world of NodeJS`)      //welcome function


if(argsArray.length<=2){                                                        //check if name is provided via argument or not
    userName = "Stranger"                                                       // if not set stranger
}else{
    userName = argsArray[2]                                                     //else get the name to userName variable
    if(userName=="Raju"){                                         //if name == Raju update the welcome variable with new function
        welcome = (name)=>console.log(`Oye ${name}, pyar na kario dil toot jata hai`)

    }
}

welcome(userName)  //call the function