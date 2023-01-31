

function calculator(){
    let num1 = Number(prompt("Seclect number and press ok"));
    let op = prompt("Select an operation:( +, -, *, / ) then press ok.");
    let num2 = Number(prompt("Seclect number and press ok"));
switch (op){
    case '+' : sum(num1,num2);
    break;
    case '-' : sub(num1,num2);
    break;
    case '*' : mult(num1,num2);
    break;
    case '/' : div(num1,num2);
    break;

};
};

function sum(a,b){
    console.log("Calculator");
    
    document.getElementById("answer").innerHTML=`
    <p>${a} + ${b} = ${a+b}</p>
    `
};
function sub(a,b){
    console.log("Calculator");
    
    document.getElementById("answer").innerHTML=`
    <p>${a} - ${b} = ${a-b}</p>

    `
};
function mult(a,b){
    console.log("Calculator");
    
    document.getElementById("answer").innerHTML=`
    <p>${a} x ${b} = ${a*b}</p>

    `
};
function div(a,b){
    console.log("Calculator");
    
    document.getElementById("answer").innerHTML=`
    <p>${a} / ${b} = ${a/b}</p>

    `
};
