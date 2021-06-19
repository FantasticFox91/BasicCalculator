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
};
