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
    screenValue.value = ""
};

// Event listeners

numberBtn.map((x)=> x.addEventListener('click', ()=>{
    if(checker === true){
    screenValue.value += x.value;
    display = screenValue.valueAsNumber;
    
    screenValue2.placeholder += x.value;
    }else if(checker === false){
    screenValue.value += x.value;
    display2 = screenValue.valueAsNumber;
    screenValue2.placeholder += x.value;
    
    }
}));

screenValue.addEventListener("change", () => console.log("HMMMMM"));

signsBtns.map((x) => x.addEventListener("click", () =>{
    operator = x.value
    screenValue2.value = ""
    screenValue2.placeholder += `${operator}`
    screenValue.value = ""
    checker = !checker
    screenValue.placeholder = ``
    
}));

evalBtn.addEventListener("click",() =>{
    screenValue.value = eval(screenValue2.placeholder)
    screenValue2.placeholder += `=`
    // operate(display,display2,operator)
    // screenValue.value = operate(display,display2,operator)
    // screenValue2.placeholder = `${display}${operator}${display2}=`
})

clearBtn.addEventListener("click", () =>{
    display = 0;
    display2 = 0;
    screenValue.value = ""
    screenValue.placeholder = "Please enter your numbers"
    screenValue2.placeholder = ""
});

