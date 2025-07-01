//              OBJECT

/* object is a data type just like boolean, numbers etc.
object literals is called objects both are same.
objects men hum key value pair dete hen.
hum us me multiple property bana sakte hen
object ko curly braket {} se represent karte hen 
object ke ander hum ek or object bana sakte hen jise nested object kehte hen
object ki value ko print karwane ke liye object ka name console karen
agar hamen object ki koi ek property ki value chahiye uske liye dot notion ya square notion ka use karte hen
hamen typescript men type mention karna zarori he
object ki type define karne ke liye ek object hi banaya jae ga jis men har key ki type define karni he
object mutable hota he means ke iski values ko hum update bhi kar sakte hen*/

let person: {
    name:string,
    age:number,
    isMarried:boolean,
    //email:string,
    address:{
        country:string,
        city:string,
        postalcode:number
    };
    
}= {
    name: "khizra",
    age: 18,
    isMarried: false,
    address: {
        country: "pakistan",
        city: "karachi",
        postalcode: 4567
    },

}

console.log(person.name);
console.log(person["age"]);
console.log(person["address"]["city"]);
console.log(person.address.postalcode);

// person.email = "syedakhizra000";
// console.log(person);
// delete person.age;
// console.log(person);
person.name="zainab";
console.log(person);
