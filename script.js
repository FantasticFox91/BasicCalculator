// Variables declaration

const numberBtn = Array.from(document.getElementsByClassName("numbers"));
const signsBtns = Array.from(document.getElementsByClassName("signs"));
const screenValue = document.getElementById("inputValue");
const screenValue2 = document.getElementById("inputValue2");
const evalBtn = document.getElementById("evaluate");
const clearBtn = document.getElementById("AC");
const decimalBtn = document.getElementById("decimal");
const oppositeBtn = document.getElementById("opposite");
const percentageBtn = document.getElementById("percentage");
const deleteBtn = document.getElementById("delete");
var display = 0;
var display2 = 0;
var operator = "";
var checker = true;
var counter = 0;
var counterSign = 0;
var index = 0;


//Basic functions

add = (a,b) => a+b;

substract = (a,b) => a-b;

multiply = (a,b) => a*b;

divide = (a,b) => a/b;

percent = (a,b) => {
    let result = a*(b*0.01);
    if(Number.isInteger(result)){
        return result;
    }else{
        return Math.round(result*100000)/100000;
    }
}

//Connection basic function into main function

operate = (num1,num2,operator) => {
    if(Number(num1) === 0 && Number(num2) === 0){
        console.log("Hmmm");
        display = 0;
        display2 = 0;
        screenValue.value = "";
        screenValue.placeholder = "";
        checker = true;
        counter = 0;
        operator = "";
        counterSign = 0;
        screenValue.value = 0;
        screenValue2.placeholder = ""

    }else if(operator === "+"){
        let result = add(num1,num2);
        if(Number.isInteger(result)){
            return result;
        }else{
            return Math.round(result*100000)/100000;
        }
    }else if(operator === "-"){
        let result = substract(num1,num2);
        if(Number.isInteger(result)){
            return result;
        }else{
            return Math.round(result*100000)/100000;;
        }
    }else if(operator === "*"){
        let result = multiply(num1,num2);
        if(Number.isInteger(result)){
            return result;
        }else{
            return Math.round(result*100000)/100000;;
        }
    }else if(operator === "/"){
        let result = divide(num1,num2);
        if(Number.isInteger(result)){
            return result;
        }else{
            return Math.round(result*100000)/100000;
        }
    }
    display = 0;
    display2 = 0;
    
};

// Event listeners

numberBtn.map((x)=> x.addEventListener('click', ()=>{
    if(checker === true){
    if(counter === 0){
        screenValue.value = null;
        screenValue.value += x.value;
        display += Number(x.value)
        counter = 1;
        screenValue2.placeholder = "";
        screenValue2.placeholder += Number(x.value)
    }else{
        screenValue.value += x.value;
        display = screenValue.value;
        screenValue2.placeholder += x.value
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
        counterSign ++;
        
        screenValue2.placeholder = `${display}${operator}`
    }else if(counterSign === 1 && display2 != 0){
        screenValue.value = operate(Number(display),Number(display2),operator);
        operator = x.value;
        display = screenValue.value
        counterSign = 1;
        counter = 0;
        screenValue2.placeholder = `${display}${operator}`
    }else{
        display = 0;
        display2 = 0;
        screenValue.value = "";
        screenValue.placeholder = "";
        checker = true;
        counter = 0;
        operator = "";
        counterSign = 0;
        screenValue.value = 0;
        screenValue2.placeholder = ""
    }  
}));

evalBtn.addEventListener("click",() =>{
    if(operator === ""){

    }else if(operator === "/" && Number(display2) === 0){
        alert("Sorry incorrect operation, don't try to destroy my calculator");
        counter = 0;
        display = screenValue.value;
        display2 = null;
        counterSign = 0;
        operator = "";
        checker = true;
    }else{
        screenValue.value = operate(Number(display),Number(display2),operator);
        screenValue2.placeholder = `${Number(display)}${operator}${Number(display2)}=`
        counter = 0;
        display = screenValue.value;
        display2 = null;
        counterSign = 0;
        operator = "";
        checker = true;
}
})

clearBtn.addEventListener("click", () =>{
    display = 0;
    display2 = 0;
    screenValue.value = "";
    screenValue.placeholder = "";
    checker = true;
    counter = 0;
    operator = "";
    counterSign = 0;
    screenValue.value = 0;
    screenValue2.placeholder = ""
});

decimalBtn.addEventListener("click", () =>{
    if(screenValue.value.includes(".")){
    }else{
    screenValue.value = screenValue.value.concat(".")
    }
});

oppositeBtn.addEventListener("click", ()=>{
    screenValue.value = -screenValue.value;
    display = screenValue.value;
});

percentageBtn.addEventListener("click", () =>{
    if(Number(screenValue.value) > 0.1) {
        screenValue.value = percent(display,display2);
        screenValue2.placeholder = `${display}*${display2*0.01}`
        display = screenValue.value;
        counterSign = 0;
        checker = !checker
        operator = "";
    }    
} );


deleteBtn.addEventListener("click", () => {
    if(checker === true){
        screenValue.value = screenValue.value.substring(0,screenValue.value.length -1);
        display = screenValue.value;
        screenValue2.placeholder = screenValue2.placeholder.substring(0,screenValue2.placeholder.length -1);
    }else{
        screenValue.value = screenValue.value.substring(0,screenValue.value.length -1);
        display2 = screenValue.value;  
        screenValue2.placeholder = screenValue2.placeholder.substring(0,screenValue2.placeholder.length -1);
    }
})