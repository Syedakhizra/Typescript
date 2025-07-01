//          LOCAL SCOPE VARIABLES
/* ese variables jo kisi bhi block men enclosed kiye jate hen wo apne block se bahar 
access hi ho patava*/
//var = function scope
// let = block scope
// const = block scope


/* var ek function scope he wo apne funztion ke block men kahin bhi access ho sakta he*/

function intro(){
    var username: string = "khizra";
    if(true){
        username = "zainab";
        
    }
    console.log(username)
}

// intro()

/*is example men hum dekh sakte hen ke ham ne block scope se bahar akar console karwaya he lekin phir bhi e
error nhi araha q ke hum ne ise function ke block men kia he 
agar hum isko function ke block se bahar access karen ge to error ayega */




/*let and const block scope variable hen wo sirf apne block men hi access hote hen*/


function introduction (){
    
    if(true){
        let username: string = "khizra";
        username = "zainab";
        
    }
    console.log(username)
}
introduction()

/* jesa ke ap dekh rahe hen ke username per error araha he q ke wo if ke block se bahar declare kiya gia he
const or let sirf apne block men hi access ho sakte hen*/
