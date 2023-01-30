

function calculator(){
let op = prompt("Select an operation:( +, -, *, / ) then press ok.");
switch (op){
    case '+' : sum();
    break;
    case '-' : sub();
    break;
    case '*' : mult();
    break;
    case '/' : div();
    break;

};
};

function sum(){
    console.log("Calculator");
    let num1 = Number(prompt("Seclect number and press ok"));
    let num2 = Number(prompt("Seclect number and press ok"));
    let product = num1+num2
    
    document.getElementById("answer").innerHTML=`
    <p>${num1} + ${num2} = ${product}</p>
    `
};
function sub(){
    console.log("Calculator");
    let num1 = Number(prompt("Seclect number and press ok"));
    let num2 = Number(prompt("Seclect number and press ok"));
    let product = num1-num2
    
    document.getElementById("answer").innerHTML=`
    <p>${num1} - ${num2} = ${product}</p>

    `
};
function mult(){
    console.log("Calculator");
    let num1 = Number(prompt("Seclect number and press ok"));
    let num2 = Number(prompt("Seclect number and press ok"));
    let product = num1*num2
    
    document.getElementById("answer").innerHTML=`
    <p>${num1} x ${num2} = ${product}</p>

    `
};
function div(){
    console.log("Calculator");
    let num1 = Number(prompt("Seclect number and press ok"));
    let num2 = Number(prompt("Seclect number and press ok"));
    let product = num1/num2
    
    document.getElementById("answer").innerHTML=`
    <p>${num1} / ${num2} = ${product}</p>

    `
};
