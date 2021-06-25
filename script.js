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

//Round result of ariphmetic operation in a case of long decimals

roundDecimal = result => Number.isInteger(result) ? result : Math.round(result*100000)/100000;

//Ariphmetic operations
add = (a,b) => a+b;

substract = (a,b) => a-b;

multiply = (a,b) => a*b;

divide = (a,b) => a/b;

percent = (a,b) => {return roundDecimal(a*(b*0.01))};

//Hard reset all valuables 
reset = () =>{
    display = 0
    display2 = 0
    screenValue.value = ""
    screenValue.placeholder = ""
    checker = true
    counter = 0
    operator = ""
    counterSign = 0
    screenValue.value = 0
    screenValue2.placeholder = ""
};

//Soft reset of varuables for correct working after pressing equal sign and precentage
softReset = () => {
    counter = 0;
    display = screenValue.value;
    counterSign = 0;
    operator = "";
    checker = true;
};

//Delete wrong entered digits  
deleteLastChar = (number) => {
    screenValue.value = screenValue.value.substring(0,screenValue.value.length -1)
    number = screenValue.value
};

//Connection basic function into main function

operate = (num1,num2,operator) => {
    if(Number(num1) === 0 && Number(num2) === 0){
        reset()
    }else if(operator === "+"){
        return roundDecimal(add(num1,num2))
    }else if(operator === "-"){
        return roundDecimal(substract(num1,num2))
    }else if(operator === "*"){
        return roundDecimal(multiply(num1,num2))
    }else if(operator === "/"){
        return roundDecimal(divide(num1,num2))
    }
    display = 0;
    display2 = 0;
};

// Event listeners for numbers

numberBtn.map((x)=> x.addEventListener('click', ()=>{
    if(checker === true && counter === 0){
            screenValue.value = ""
            screenValue.value += x.value
            display += Number(x.value)
            counter++
            screenValue2.placeholder = ""
            screenValue2.placeholder += Number(x.value)
        }else if(checker === true && counter === 1) {
            screenValue.value += x.value
            display = screenValue.value
            screenValue2.placeholder += x.value
        }else if(checker === false && counter === 0){
            screenValue.value = ""
            screenValue.value += x.value
            display2 = 0
            display2 += x.value
            counter ++
        }else if(checker === false && counter === 1){
            screenValue.value += x.value
            display2 = screenValue.value
        }
    }
 )
);

// Event listeners for sign buttons

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
        reset()
    }  
}));

// Event listeners for evaluation sighn

evalBtn.addEventListener("click",() =>{
            if(operator === ""){
                alert("Please, choose operator")
            }else if(operator === "/" && Number(display2) === 0){
                alert("Sorry incorrect operation, don't try to destroy my calculator")
                reset()
            }else{
                screenValue.value = operate(Number(display),Number(display2),operator)
                screenValue2.placeholder = `${Number(display)}${operator}${Number(display2)}=`
                softReset()
            }
        }
    );


// Hard reset after pressing appropriate button
clearBtn.addEventListener("click", () =>{reset()});

//Add decimal to number
decimalBtn.addEventListener("click", () =>{screenValue.value.includes(".") ? console.log("upsi") : screenValue.value = screenValue.value.concat(".")});

//Make number opposite of number (need work on!!!)
oppositeBtn.addEventListener("click", ()=>{
    screenValue.value = -screenValue.value;
    display = screenValue.value;
    }
);

//Percentage calculation
percentageBtn.addEventListener("click", () =>{
    if(Number(screenValue.value) > 0.1) {
        screenValue.value = percent(display,display2);
        screenValue2.placeholder = `${display}*${display2*0.01}`
        softReset()
        }    
    } 
);

//Backspace button
deleteBtn.addEventListener("click", () => { checker ? deleteLastChar(display) : deleteLastChar(display2)});