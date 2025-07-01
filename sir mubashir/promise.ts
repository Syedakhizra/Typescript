//            PROMISES

const promise = new Promise((resolve,reject)=>{
 resolve("success!");
 // reject("fail!");
});


promise.then((message)=>{
console.log(message);
});

promise.catch((message)=>{
    console.log(message);
    
});

//       PROMISE CHAINING
// IS MEN HUM EK METHOD MEN DOSRE METHOD KO MERGE KAR DEN GE


const returnMoney = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("money returned");
    }, 3000);
});

returnMoney.then((value)=>{
    console.log(value);
    console.log("thanks to returned money");
    
}).catch((value)=>{
    console.log(value);
    console.log("i can't unable to returned money");
    
    
})


//        EXAMPLE

function washing(){
    console.log("washing started..." );
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("washing done")
        }, 3000);
    }) 
};

function soaking(){
    console.log("soaking started..." );
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("soaking done")
        }, 3000);
    }) 
};

function drying(){
    console.log("drying started..");
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("drying done")
        }, 2000);
    })
}

washing()
 .then((value)=>{
    console.log(value); 
    return soaking();  
}).then((value)=>{
    console.log(value);
    return drying();
}).then((value)=>{
    console.log(value);
    
}).catch((error)=>{
    console.log(error);
    
});

/* promise ko hum .then or .catch se handle karte hen lekin humein is se bhi ziada easy way men apne 
promise ko handle karna ho to hum async await ko use karte hen 
yeh sb asynchronous programming ka part he sab se pehle hum ne callback ko seekha lekin woh ek mushkil way tha
or usmen huimein call back hell ka problem ka samna karna para tha call back hell s waqt samne ata he jab hum last men apne functions ko 
access kar rahe the or us men ek pyramid ban raha tha jis ki wajah se hamara code readable nhi hota 
s wajah se hum ne promises ko seekha q ke woh ek easy way tha as compared to call back function
lekin promise ke bad hum ne ek or functionality ko seekha jis ko async await kehte hen ye pora promise
ki tarah hi hota he lekin promise handlind karte waqt hum .then ki bajae async function lagate hen */


//     ASYNC AWAIT
/* hum agar kisi bhi normal function men await lagaen ge to error aega humein awit keyword ko use karne ke liye 
ek async function banana zarori he
humein function ko envoke karwane ke liye usko kisi na kisi variable men store karwana lazmi he 
q ke woh ek promise return karega to us promise ki value ko access karne ke liye humen usko ek variable men store karna hoga
yeh sab jab tak thik he jab tak hamara code happy flow men chal raha ho matlab ke sare kam resolve
ho rahe hon lekin agar in men se koi bhi kam reject bhi ho sakta he isliye hum iske liye try or catch 
ka block ka use karen ge try ka block tab chale ga jab promise resolve ho raha hoga or catch 
ka block tab chale ga jab promise reject ho raha hoga
or akhir men hum finally ka block bhi laga sakte hen chahe promise resolve ho ya reject finally ka block to lazmi chale ga
*/



 async function runWashingmachine (){
      try{
        const task1= await washing();
      console.log(task1);
      
      const task2 =await soaking();
      console.log(task2);
      
      const task3 =await drying();
      console.log(task3);
    }catch(error){
        console.log(error);
        
    }finally{
        console.log("i will always run");
        
    }
      
}

runWashingmachine();