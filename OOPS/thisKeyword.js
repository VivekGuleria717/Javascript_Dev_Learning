// "use strict";
// var outerObj = {
   
//   innerObj: {
//      name:"Vivek",
//     method: function() {
//       console.log(this.name);
//     }
//   }
// };
// outerObj.innerObj.method(); //same  Outputs for both cases the inner object:{ method: [Function: method] }
//without use strict same output


////////////////
// var length=4;
// function callback(){console.log(this.length)}

// const object={
//   length:5,
//   method(){
//     length:9
//     arguments[0]();
//   }
// }
// console.log(object.method);


///////////////////////

// const user={
//     name:"Mohit",
//     greet(){
//         setTimeout(function(){
//             console.log("Hello", this.name); // outputs Hello undefined as this refers to the global object in non-strict mode and undefined in strict mode
//         },0)

//         setTimeout(()=>{
//             console.log("Hello", this.name); // arrow function doesn't have its own this value, it uses the this value of the enclosing lexical context which is the greet method of user object, so this.name refers to user.name and outputs Hello Mohit
//         },0)
//     }   
// }
// user.greet(); 


/////////////////
// const obj = {
//     name: "Mohit",

//     test() {
//         function inner() {
//             console.log(this.name);
//         }
//         inner(); //undefined as inner doesn't get obj as its this
//         inner.call(this); // inner.call(this) - explicitly sets the this value for the inner function now this refers to obj and outputs Mohit
//     }
// };

// obj.test();