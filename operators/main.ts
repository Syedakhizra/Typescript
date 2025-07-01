//Arithmetic operators
//Addition

let num1: number = 2;
let num2: number = 3;
let sum: number = num1 + num2
console.log(sum)

//subtraction

let numb1: number = 50;
let numb2: number = 34;
let suum: number = numb1 - numb2
console.log(suum)

//Multiplication

let numbe1: number = 17;
let numbe2: number = 2;
let summ: number = numbe1 * numbe2
console.log(summ)

//Division

let number1: number = 10;
let number2: number = 17;
let total: number = number1 / number2
console.log(total)

//Exponentiation

let layer: number = 5;
let apple: number = 2;
let power: number = layer ** apple;
console.log(power)

// Modulus

let apples: number = 10;
let bags: number = 17;
let remainder: number = apples % bags
console.log(remainder)




//Unary Operator
//pre increment 
//agar ++ pehle hoga to woh pre kehlaega pre increment men pehle hi operation perform hojata he phir print hoga
//jab print karen ge to value update nhi hogi

let a: number = 3;
let b: number = 4;

 ++a; //pre increment //result 4
  console.log(++a);// 5



// //post increment
// /*agar ++ bad men hoga to wo post increment he is men pehle operation perform nhi hoga 
// balke ek step bad hoga*/

  b++; //post increment //result 4 
  console.log(b++);//5
  console.log(b);//6




 //pre decrement
 /* agar -- pehle hoga to wo pre decrement he iska operation bhi pre increment jesa he*/

 --a;//2
 console.log(a)
 console.log(--a); //1



 
 //post decrement
 /*agar -- bad men hoga to wo post decrement he iska operation bhi post increment jesa he*/

 b--;//4
 console.log(b--); //3
 console.log(b); //2

 //                         HOME WORK

let e: number = 5;
let f: number = 2;
let g: number;
 g = ++e + e++ + --f + f-- + e + f++ + f;
    //6  +  6  +  1  +  1  + 7 +  0  + 1 = 22
    
console.log(g);


// Combining Operators
/*jab arithmetic operators ek hi sath kaam combine ho kar kam karen to
 use combining operator kehte hen is ko hume bodmas ke rule ke according
 solve karna hota he*/

 let test1: number = 2 - 4 + (6-5);
                  // 2  - 4 + 1
                  // 2  -3
                  // -1              
 console.log(test1)

 let test2: number = (2 + 5 * (4-7)/2) - (2-3*(4*5)/1);
 console.log(test2)


 // Assignment operators
// += -= *= /= how it use

let ab = 4;
let cd = 9;

ab += 5; //its a compact(short) way to write ab = 4+5
console.log(ab)

ab -= 3;
console.log(ab)

ab *= 3;
console.log(ab)

ab /= 3;
console.log(ab)

//Comparison Operators
//equal to ==  not equal to != greater than >  less than < 
// greater than equal to >=
// less than equal to <=


let x = 5;
let y = 3;

let isEqual = x==y; //false
let isNotEqual = x!=y; //true
let isGreaterThan = x>y; //true
let isLessThan = x<y; //false
let also = x>=y;
let alsoo = x<=y;

// console.log(isEqual)
// console.log(isNotEqual)
// console.log(isGreaterThan)
// console.log(isLessThan)
// console.log(also)
// console.log(alsoo)


//Logical Operators
//logical and &&   
//yeh kehta he ke do condition do or donon cond true hongi to final answer true hoga is 
//men se ek bhin cond false hoi to false hoga answer

let m = 5;
let n =2;

let logicalAnd = (m>0) && (n >0)
console.log(logicalAnd)

//Logical or ||
/*yeh bhi do condition leta he lekin is men ek bhi cond true hogai to yeh true de dega jab donon cond false hongi tab
hi ye final answer false dega*/

let logicalOr = (m>0) || (m == n)
console.log(logicalOr)

//logical not !
/* isko sirf ek hi condition chahiye hoti he is ka kam yeh hota he ke yeh ulta karega hamare answer
ko agar hum ne koi true cond di he to yeh usko false kardega or agar koi false di he to wo isko true karega*/

let logicalNot = !(m==n); //true
console.log(logicalNot) 

//Ternary OPerators
//cond? expression1 : expression 2

let age = 18;

let result = age<18? "adult" : "not adult";
console.log(result)



//                   Operators are End:)