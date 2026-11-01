///// 1 //////

// console.log(this) //global object

/// 2 ///

// this.a=5;
// console.log(this.a); //5

/// 3 ///

// this.a=5;
// function getParam(){
// console.log(this.a);  // 5 // 5 here getparam method parent is window obj and this.a=5 so windpw obj holds a as 5 and this refers to window obj
// }

// getParam() 

/// 4 with arrow function ///

// this.a=5;
// const getParam=()=>{
// console.log(this.a);  // 5 here getparam method parent is window obj and this.a=5 so windpw obj holds a as 5 and this refers to window obj
// }

// getParam() 

/// 5 //

// let user={
//     name:"Piyush",
//     age:24,
//     getDetails(){
//         console.log(this.name);   //Piyush
//     }
// }
// user.getDetails();

// expl: here this is inside regular function and parent of that func is user object, so here this keyword
// hold context of user object and so this name refers to user.name =piyush


///// 6 /////

// let user={
//     name:"Piyush",
//     age:24,
//     childObj:{
//     newName:"Ramesh",
//     getDetails(){
//         console.log(this.newName);   //Ramesh
//           console.log(this.newName ,"and", this.name);   //Ramesh and undefined (as name is not available in childObj)
//     }
// }
// }
// user.childObj.getDetails();

// expl: in case of nested object having regular methods this points to nearest object as parent so in 
// this case getDetails method's nearest parent is childobj so this refer to childobj and this.newName =
// childObj.newName=Ramesh

///// 7 /////

// let user={
//     name:"Piyush",
//     age:24,
//     getDetails:()=>{
//      console.log(this);  // window obj   
//     console.log(this.name);  // undefined
// }
// }

// user.getDetails();

// let user={
//     name:"Piyush",
//     age:24,
//     getDetails:function(){
//      console.log(this);  //  obj   
//     console.log(this.name);  // Piyush
// }
// }

// user.getDetails();

// expl: reas below ex explatn, arrow func didnt have any parent as normal func

///// 8 /////

// let user1={
//     name:"Piyush",
//     age:24,
//     getDetails(){
//     const nestedArrow=()=>console.log(this.name); //Piyush
//     nestedArrow()
// }
// }
// user1.getDetails();

// expl: so in case of arrow func this takes refernece from it's parent function (getdeatils) and 
// parent function further take value of this from it;s parent (user object), so getDetails method have refernce 
// of user obj and futher this keyword inside arrow have ref of getDetails as parent(user--->getdetails-->nestedArrow)

///// 9 /////

// const user={
//     fName:"Piyush",
//     getName(){
//         const fName="Piyush Agg";
//         return this.fName; // still here this points to user obj so this.fName still holds user.fName='piyush'
//     }
// }

// console.log(user.getName()); //Piyush

///// 10 /////

// function makeUser(){
//     return {
//         name:"John",
//         ref:this, // here this refer to global window obj
//     };
// }
// let user=makeUser(); // here while invoking makeUser() func it have window as parent obj 
// console.log(userref.name); // undefined/empty


///// 11(10) /////

// function makeUser(){
//     return {
//         name:"John",
//         ref(){return this}, // here this refer to given obj as parent obj
//     };
// }
// let user=makeUser(); // here while invoking makeUser() func it have  obj {name:"John", ref(){return this}}  as parent obj;
// console.log(user.ref()); // {name: 'John', ref: ƒ}
// console.log(user.ref().name); //John

////// 12 SETTIMEOUT ///////

// const user={
//     name:"Vivek Guleria",
//     logMessage(){
//         console.log(this.name); // undefined for case 1 and Vivek Guleria for case 2
//     }
// };
// setTimeout(user.logMessage, 1000); // case 1 // logemessage is not invoked it is passed as whole function so it's parent is window obj
// setTimeout(user.logMessage(), 1000); //case 2 // here on invocation parent of logmessage func is user obj itself

///// 13 /////

// const user={
//     name:"Piyush",
//     greet(){
//      return `Hello, ${this.name}`; //Hello, Piyush
//     },
//     fareWell:()=>{
//         return `Goodbye, ${this}`; // Goodbye, as this refers window obj
//     }
// }
// console.log(user.greet());
// console.log(user.fareWell());


///// 14 calculator /////

// let calculator={
//     read(){
//         this.a=+prompt("a = ", 0);
//         this.b=+prompt("b = ", 0);
//     },

//     sum(){
//         return this.a + this.b
//     },

//     mul(){
//         return this.a * this.b
//     }
// }
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

///// 15 //////

// var length=4;
// function callback(){
//  console.log(this.length); //4
// }

// const obj={
//     length:5,
//     method(fn){
//         fn(); // as this method (fn)  is invoked inside method() so it will refer to global obj so for global length is 4
//     }
// }
// obj.method(callback) //4


///// 16 /////

var length=4;
function callback(){
//  console.log(this.length); 
}
const obj={
    length:5,
    method(){
    console.log(arguments);
     arguments[0]();  // arguments=[callback,2,3] so arguments[0]()=callback() so here parent of callback is arguments that is [callback,2,3]
     // and length of array is 3 so output is 3
    }
}
obj.method(callback,2,3) 


///// 17 /////
// var calc={
//     total:0,
//     add(a){
//         this.total+=a;
//         return this;
//     },
//     subtract(a){
//         this.total-=a;
//         return this;
//     },
//     multiply(a){
//         this.total*=a;
//         return this;
//     }

// }

// const result=calc.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total); //30









