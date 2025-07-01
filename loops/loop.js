//             LOOPS
/* jab bhi hamen koi kam repeatedly karwana ho to hum bar
bar code nhi likhte balke uska loop bana dete hen
iska syntax if-else statement ki tarah hi hota he ismen sab se pehle hum ek varible bnate hen pnir uski
condition dete hen ke yeh loop kab tak chale ga or phir updation*/
//                  FOR LOOP
var number = 2;
for (var i_1 = 1; i_1 <= 10; i_1++) {
    console.log("".concat(number, " * ").concat(i_1, " = ").concat(number * i_1));
}
/* hum apne loop men if-else bhi use kar sakte hen*/
var num = 2;
for (var i_2 = 1; i_2 <= 10; i_2++) {
    console.log("".concat(num, " * ").concat(i_2, " = ").concat(num * i_2));
    if (num * i_2 == 10) {
        break;
    }
}
//          INFINITE LOOP
/*esa loop hota he jo kabhi end nhi hota means ke iske ander hum esi condition dete hen
jo kabhi false nhi ho pati or loop chalta rehta he

for(let i =0; i>=o; i++){
      console.log("hello world")
}
yeh esa loop he jo infinite chalta hi rahega means ke hello world print hota hi jaega q ke hum ne is men condition ye dedi he
ke 0 se bare jab tak number ate rahen ge yeh loop chalta jaega or sare number hi zero se bare hote hen
humein iska istemal kabhi nhi karna warna humara software crash ho sakta he*/
//            WHILE LOOP 
/* While loop ka syntax alag hota he lekin ye bhi for loop ki tarah hi kam karta he
yeh loop ko likhne ke alag alag tareeke hen lekin inki functionality same he*/
var i = 1;
while (i <= 5) {
    console.log("i =", i);
    i++;
}
//            DO WHILE LOOP
/* Do while loop while loop ki tarah hi hota he bas is men condition last men deni hoti he isliye yeh ek bar to
zaroor chalta he iske bare men sab se important bat ye he ke iske last men semicolon lagana zarori he*/
var j = 1;
do {
    console.log("j=", j);
    j++;
} while (j <= 10);
