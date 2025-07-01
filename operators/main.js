//Arithmetic operators
//Addition
var num1 = 2;
var num2 = 3;
var sum = num1 + num2;
console.log(sum);
//subtraction
var numb1 = 50;
var numb2 = 34;
var suum = numb1 - numb2;
console.log(suum);
//Multiplication
var numbe1 = 17;
var numbe2 = 2;
var summ = numbe1 * numbe2;
console.log(summ);
//Division
var number1 = 10;
var number2 = 17;
var total = number1 / number2;
console.log(total);
//Exponentiation
var layer = 5;
var apple = 2;
var power = Math.pow(layer, apple);
console.log(power);
// Modulus
var apples = 10;
var bags = 17;
var remainder = apples % bags;
console.log(remainder);
//Unary Operator
//pre increment 
//agar ++ pehle hoga to woh pre kehlaega pre increment men pehle hi operation perform hojata he phir print hoga
//jab print karen ge to value update nhi hogi
var a = 3;
var b = 4;
++a; //pre increment //result 4
console.log(++a); // 5
// //post increment
// /*agar ++ bad men hoga to wo post increment he is men pehle operation perform nhi hoga 
// balke ek step bad hoga*/
b++; //post increment //result 4 
console.log(b++); //5
console.log(b); //6
//pre decrement
/* agar -- pehle hoga to wo pre decrement he iska operation bhi pre increment jesa he*/
--a; //2
console.log(a);
console.log(--a); //1
//post decrement
/*agar -- bad men hoga to wo post decrement he iska operation bhi post increment jesa he*/
b--; //4
console.log(b--); //3
console.log(b); //2
//                         HOME WORK
var e = 5;
var f = 2;
var g;
g = ++e + e++ + --f + f-- + e + f++ + f;
//6  +  6  +  1  +  1  + 7 +  0  + 1 = 22
console.log(g);
// Combining Operators
/*jab arithmetic operators ek hi sath kaam combine ho kar kam karen to
 use combining operator kehte hen is ko hume bodmas ke rule ke according
 solve karna hota he*/
var test1 = 2 - 4 + (6 - 5);
// 2  - 4 + 1
// 2  -3
// -1              
console.log(test1);
var test2 = (2 + 5 * (4 - 7) / 2) - (2 - 3 * (4 * 5) / 1);
console.log(test2);
// Assignment operators
// += -= *= /= how it use
var ab = 4;
var cd = 9;
ab += 5; //its a compact(short) way to write ab = 4+5
console.log(ab);
ab -= 3;
console.log(ab);
ab *= 3;
console.log(ab);
ab /= 3;
console.log(ab);
//Comparison Operators
//equal to ==  not equal to != greater than >  less than < 
// greater than equal to >=
// less than equal to <=
var x = 5;
var y = 3;
var isEqual = x == y; //false
var isNotEqual = x != y; //true
var isGreaterThan = x > y; //true
var isLessThan = x < y; //false
var also = x >= y;
var alsoo = x <= y;
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
var m = 5;
var n = 2;
var logicalAnd = (m > 0) && (n > 0);
console.log(logicalAnd);
//Logical or ||
/*yeh bhi do condition leta he lekin is men ek bhi cond true hogai to yeh true de dega jab donon cond false hongi tab
hi ye final answer false dega*/
var logicalOr = (m > 0) || (m == n);
console.log(logicalOr);
//logical not !
/* isko sirf ek hi condition chahiye hoti he is ka kam yeh hota he ke yeh ulta karega hamare answer
ko agar hum ne koi true cond di he to yeh usko false kardega or agar koi false di he to wo isko true karega*/
var logicalNot = !(m == n); //true
console.log(logicalNot);
//Ternary OPerators
//cond? expression1 : expression 2
var age = 18;
var result = age < 18 ? "adult" : "not adult";
console.log(result);
