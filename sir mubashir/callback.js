//         ASYNCHRONOUS PROGRAMMING BY SIR MUBASHIR
//                CALL BACK FUNCTION
/* call back function men ye hota he ke hum ek function banate hen or uske parameter men
ek function hi expect karte hen or sko void rakhte hen iska mtlb na hi wo koi parameter expect karega or na hi koi argument
iske 2 attributes ya properties hoti hen call back function ki
- call back function wo hota he jo apne parent function ke call ke waqt as a argument pass kia jata he
lekin us ko pass karte hoa sirf uska name likhen ge usko invoke nhi karen ge
- dosra attribute ye he ke wo apne parent fuction men envoke kia jaega*/
function parentFunction(func) {
    console.log("I am a parent function");
    func();
}
function childFunction() {
    console.log("I am a child function");
}
parentFunction(childFunction);
//               callback
//      EXAMPLE
function washing(callback) {
    console.log("washing started...");
    setTimeout(() => {
        console.log("washing done!");
        callback();
    }, 5000);
}
;
function soaking(callback) {
    console.log("soaking started...");
    setTimeout(() => {
        console.log("soaking done!");
        callback();
    }, 3000);
}
;
function drying() {
    console.log("drying started...");
    setTimeout(() => {
        console.log("drying done!");
    }, 2000);
}
;
console.log("folding laundary");
washing(() => {
    soaking(() => {
        drying();
    });
});
console.log("I am making biryani");
export {};
