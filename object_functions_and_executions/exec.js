// functions in js
function test(){
    console.log('hey');
}
// console.log(test());

// function with parameters 

function describeMe(name, age){
    console.log(`My anme is ${name} and I am ${age} years old`);
}
// console.log(describeMe('Vivek', 27));

//FUNCTIONS AS EXPRESSION //
const sayHi=function(){
    console.log('vVivek says hi');
    
}
// console.log(sayHi());

//HOISTING//



////
console.log(a)
printName()
let a = 4

function printName(){
    console.log('my name is mrinal')
}
let printAge = function(){
    console.log(24)
}
printAge()
//o/p: Gives reference error as we are using let datatype variable which is avialable in TDZ before code execution 


