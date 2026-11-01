
//------------CALL--------------//
const person1={
    myName:"Vivek",
    age:20,
    printNameandAge:function(){ console.log(`My name is ${this.myName} and age is ${this.age}, my`)}
}
// console.log(person1.printNameandAge());

const person2={
    myName:"Rahul",
    age:26
}

// person1.printNameandAge.call(person2);
// console.log(person1.printNameandAge.call(person2));

//CALL with argumants

const personx={
    myName:"Vivek",
    age:20,
    printNameandAge:function(location){ console.log(`My name is ${this.myName} and age is ${this.age}, my location is ${location}`)}
}
// console.log(personx.printNameandAge('New York'));

const persony={
    myName:"Rahul",
    age:26
}

// console.log(personx.printNameandAge.call(persony,'Delhi'));

// Polyfill of CALL method //
let car={
    brand:'VOLVO',
    model:'2022'
}
function printdetails(price){ 
    console.log(`I have ${this.brand} var of model ${this.model} and price is ${price}`)
};
Function.prototype.myCall=function(context={},...args){ // here ...args behave as rest operator
    if(typeof this !=='function'){
      throw new Error (this + 'Is not callable');  
    }
    // console.log(this,args);
    // myFunction=this---> printdetails
   // context--> car
   //args-->3500000
    context.myFunction=this; // car.printdetails
    context.myFunction(...args) //car.printdetails(350000)
}
// console.log(printdetails.myCall(car));
// console.log(printdetails.myCall(car,'35,00,000'));

//----------APPLY----------------//
// apply can allow to pass array of arguments 

const personObj={
    name:'Mike',
    age: 28,
    describe:function(location,hobby){console.log(`My name is ${this.name} and I am ${this.age} years old, I am living in ${location} and my hobby is ${hobby}`)}
}

// console.log(personObj.describe('California','Hiking'));

const newpersonObj={
    name:'Vivek',
    age: 28
}

// console.log(personObj.describe.apply(newpersonObj,['Pune','Cricket']));
// console.log(personObj.age.apply(newpersonObjn,[30])); //error as age is not a function


// polyfill of APPLY method //
const newpersonObj1={
    name:'Vivek',
    age: 28
}

function describeme(location,hobby){
    console.log(`My name is ${this.name}, I am ${this.age} years old, I am living in ${location} and my hobby is ${hobby}`);
}

Function.prototype.myApply=function(context={}, args=[]){
    if(typeof this!=='function'){
        throw new Error(this + 'is not callable');
    }
    if(!Array.isArray(args)){
        throw new Error('Invalid arguments');
    }
    console.log(this);
    
    context.myFunction=this;
    context.myFunction(...args);

}

// console.log(describeme.myApply(newpersonObj1,['Delhi','Sleeping']));

//--------BIND METHOD-----------//
 const aliceObj={
    name:"Alice",
    age:30,
    introduce:function(){console.log(`My name is ${this.name}, I am ${this.age} years old`)}
 }

 const introduceAlice = aliceObj.introduce.bind(aliceObj);
//  console.log(introduceAlice());


//---------POLYFILL FO BIND METHOD-----------//
const carObj={
    brand:'KIA',
    model:2023
}
function buyCar(price,color){
 console.log(`My car brand is ${this.brand} of ${this.model} and price is ${price} color is ${color}`);
 
}
Function.prototype.customBind= function(context={},...boundargs){
    if(typeof this !=='function'){
        throw new Error(this +' is not callable');
    }
    console.log(this); //buyCar
    console.log(boundargs); // 160000
    console.log(context); //carObj
    
     const targetfunction=this; // this=buyCar
     return function(...args){
        console.log(args); //white
        return targetfunction.apply(context,[...boundargs,...args]);
        //buyCar.apply(carObj,[1600000,white])
        // carObj.buyCar([160000,white])
     }

     //or
    //  context.fn=this;
    //  return function(...newargs){
    //     return context.fn(...boundargs,...newargs)
    //  }

}

const buyMyCar=buyCar.customBind(carObj,1600000);
// console.log(buyMyCar('white'));

 
 











