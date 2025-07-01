//       TYPE ALIAS
/* TYPE ALIAS ko hum is liye use karte hen jab hamen ek hi tarah ke bht sare objects banane hote hen
to us men bar bar type ko define karna na pare ek hi dafa us ki type bana den
or bar bar us ko hi use kar sake iske liye hamen is type ka bhi koi name banana hota he*/

type Ipersondata= {
    name:string,
    age:number,
    isMarried:boolean,
    address:{
        country:string,
        city:string,
        postalcode:number
    }
    
}



let person1: Ipersondata= {
    name: "khizra",
    age: 18,
    isMarried: false,
    address: {
        country: "pakistan",
        city: "karachi",
        postalcode: 4567
    },

};

let person2: Ipersondata= {
    name: "zainab",
    age: 9,
    isMarried: false,
    address: {
        country: "pakistan",
        city: "karachi",
        postalcode: 4567
    },

};

let person3: Ipersondata= {
    name: "kashan",
    age: 16,
    isMarried: false,
    address: {
        country: "pakistan",
        city: "karachi",
        postalcode: 4567
    },

}