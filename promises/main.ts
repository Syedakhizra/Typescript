// -------------------------------PROMISE --------------------------------------------------



let dostKaWada = new Promise(function(resolve,reject){
    let dostKiJeb = 4000;
    if(dostKiJeb >=5000){
        resolve("paisay wapis kar dia")
    }
    else{
        reject("paisay nhi hen")
    }

})

dostKaWada.then(function(message){
    console.log(message);
    
})

dostKaWada.catch(function(message){
    console.log(message);
    
})

