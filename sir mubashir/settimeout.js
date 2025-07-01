//                 SETTIMEOUT  FUNCTION
/* Settimeout ek function he ye ek  argument expect karta he or us argument men wo ek callback function expect karta he
is function se hum concurency ko achieve kar sakte hen
means ke multi tasking kar sakte hen is function men ek to koi kam ho raha hoga or dosri cheez is men
hamein time interval bhi bata na hoga
time mili seconds men hota he jo bhi time chahiye use 1000 se multiply kardo*/
console.log("one");
setTimeout(function () {
    console.log("hello , world!");
}, 3000);
console.log("two");
export {};
