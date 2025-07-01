//         TYPE INTERSECTION
/* isko hum isliye use karte hen jab hamare pas already koi type bani ho he jaisay hamare pas ek student
ki details ki type bani hoi he or ek type teacher ki detail ki bani hoi he
ab humare pas ek aesa person he jismen hum student or teacher donon ki type use karna chahte hen to hum 
un donon ki types ko apas men murge kar denge*/

type student = {
    name: string,
    fathername: string,
    rollno: number
};

type teacher = {
    name: string,
    age: number,
    experience: number,
};

type person = student & teacher

let specialTeacher: person = {
    name: "khizra",
    fathername: "kamran",
    age: 18,
    experience: 5,
    rollno:123
};

console.log(specialTeacher);

