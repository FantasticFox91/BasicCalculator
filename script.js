// Variables declaration

const numberBtn = Array.from(document.getElementsByClassName("numbers"));
const signsBtns = Array.from(document.getElementsByClassName("signs"));
const screenValue = document.getElementById("inputValue");
const screenValue2 = document.getElementById("inputValue2");
const evalBtn = document.getElementById("evaluate");
const clearBtn = document.getElementById("AC");
var display = 0;
var display2 = 0;
var operator = "";
var checker = true;
var counter = 0;
var counterSign = 0;


//Basic functions

add = (a,b) => a+b;

substract = (a,b) => a-b;

multiply = (a,b) => a*b;

divide = (a,b) => a/b;

//Connection basic function into main function

operate = (num1,num2,operator) => {
    if(operator === "+"){
        return add(num1,num2);
    }else if(operator === "-"){
        return substract(num1,num2);
    }else if(operator === "*"){
        return multiply(num1,num2);
    }else if(operator === "/"){
        return divide(num1,num2);
    }
    display = 0;
    display2 = 0;
    
};

// Event listeners

numberBtn.map((x)=> x.addEventListener('click', ()=>{
    if(checker === true){
    if(counter === 0){
        screenValue.value = "";
        screenValue.value += x.value;
        display += x.value
        counter = 1;
    }else{
        screenValue.value += x.value;
        display = screenValue.value;
    }
    }else if(checker === false){
        if(counter === 0){
            screenValue.value = "";
            screenValue.value += x.value;
            display2 = 0;
            display2 += x.value
            counter = 1;
        }else{
            screenValue.value += x.value;
            display2 = screenValue.value;
        }

    }
}));

signsBtns.map((x) => x.addEventListener("click", () =>{
    if(counterSign === 0){
        operator = x.value;
        checker = !checker;
        screenValue.value = "";
        counterSign ++
        console.log("Work")
    }else if(counterSign === 1){
        screenValue.value = operate(Number(display),Number(display2),operator);
        operator = x.value;
        console.log("Work2")
        display = screenValue.value
        counterSign = 1;
        counter = 0
    }
    // if(checker === false){
    //     operator = x.value
    //     screenValue2.placeholder += `${operator}`
    //     screenValue.value = "";
    //     screenValue.value = operate(Number(display),Number(display2),operator);
    //     display = screenValue.value;
    //     display2 = 0;
    //     counter = 0;
    //     counterSign +=1
    // }else{
    //     operator = x.value;
    //     screenValue2.placeholder += `${operator}`;
    //     checker = !checker;
    //     screenValue.value = "";
    //     display2 = screenValue.value
    //     counter = 0;
    //     counterSign += 1
    // }  
    
}));

evalBtn.addEventListener("click",() =>{
    screenValue.value = operate(Number(display),Number(display2),operator);
    screenValue2.placeholder += `=`
    counter = 0;
    display = screenValue.value;
    display2 = 0
    // operate(display,display2,operator)
    // screenValue.value = operate(display,display2,operator)
    // screenValue2.placeholder = `${display}${operator}${display2}=`
})

clearBtn.addEventListener("click", () =>{
    display = 0;
    display2 = 0;
    screenValue.value = ""
    screenValue.placeholder = ""
    screenValue2.placeholder = ""
    checker = true;
    counter = 0;
});


// после первого клика на кнопку начинается новая переменная и заканчивается она после клика на оператор