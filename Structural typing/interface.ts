//-------------------------------STRUCTURAL TYPING --------------------------------------------
/* str
//  FRESH OBJECT

interface  typesalary {
    name:string
    salary:number
}

interface typesalarybonus{
    name:string
    salary:number
    bonus:number
}

let employee1: typesalary ={
    name :"ali",
    salary : 10000
}

let employee2: typesalary ={
    name:"kashan",
    salary:5000
}

let employee3: typesalarybonus ={
    name:"khizra",
    salary:20000,
    bonus: 10000
}



//   STALE OBJECT

employee1 = employee2
employee2 =  employee1



employee1 = employee3
//employee3 = employee1   error 