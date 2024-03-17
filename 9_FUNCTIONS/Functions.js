
/* -------------------------------- FUNCTION -------------------------------- */



function name(husain){


    return name

}

console.log("my name is husain");

/* ------------------------------------ - ----------------------------------- */



function sum(number1 , number2){


    return number1+number2;

}

console.log(sum(5,8))


/* ------------------------------------ - ----------------------------------- */


function loginUserMessage(username = "sam"){

    if(!username){ 

        console.log("PLease enter a username");

        return

    }

    return `${username} just logged in`

}

// console.log(loginUserMessage())

console.log(loginUserMessage("husain"))



/* ------------------------------------ - ----------------------------------- */

function calculatePrice(val1 ){


    return val1;

}

console.log(calculatePrice(200));



/* ------------------------------------ - ----------------------------------- */


function calculatePrice(...val1 ){


    return val1;
}

console.log(calculatePrice(100,290,340,400,200));



/* ------------------------------------ - ----------------------------------- */


function calculateCartPrice(val1, val2, ...num1){


    return val1,val2,num1


}  

 console.log(calculateCartPrice(200, 400, 500, 2000))


 /* ------------------------------------ - ----------------------------------- */


 const user = {

    username : "husain",
    
    price : 499

 }

 function testing(anyNameWeCanWriteHere){

    console.log(`Username is${anyNameWeCanWriteHere.username} price is ${anyNameWeCanWriteHere.price}`);
 
 }

 testing(user) 



 /* ------------------------------------ - ----------------------------------- */



 const myNewArray = [200, 400, 100, 600]


function returnSecondValue(getArray){


    return getArray[1]
    

}


 console.log(returnSecondValue(myNewArray));


 console.log(returnSecondValue([200, 400, 500, 1000]));
