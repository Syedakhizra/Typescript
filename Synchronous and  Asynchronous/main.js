//----------------------SYNCHRONOUS VS ASYNCHRONOUS----------------------------------------
// SYNCHRONOUS PROGRAMMING
/* yeh woh programming thi jo hum ab tak use kar rahe the is men yeh hota tha ke
code hamesha hamara line to line execute hota he jab tak line no 1 code print nhin hotra jab tak line no 2 wala code run
nhi karta line no 3 wala code kuch time le raha he ya usmen koi problem ki wajah se wo late print hota he to line no 4 wala
code wait karta rehta he jese ke neeche ap dekh sakte hen ke pehle hello print hpoga phir variables
men number store honge phir wo + plus honge  */
console.log("hello");
var a = 3;
var b = 3;
console.log(a + b);
//  ASYNCHRONOUS PROGRAMMING
/* asynchronous programming is liye nbanai gai take agar kisi code ke beech waa code apna kam karne men delay kar raha ho to
hum us ko chor kar age ka kam kar saken yeh programming line by line nhi chalti balke yeh parallel
chalti he agar line no 3 wala code time le raha ho to wo isako side men rakh deti he or line
no 4 wala kam chal jata he phir jese hi us ka time pora ho jata he to wo execute ho jata he */
var x = 4;
var y = 5;
setTimeout(function () {
    console.log(x);
    console.log(y);
}, 30000);
console.log("khizra");
