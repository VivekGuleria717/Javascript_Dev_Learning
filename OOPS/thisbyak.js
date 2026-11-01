
// 'use strict'
//global this
// console.log(this);


// this inside a function
// 'use strict'
// function x(){
//     console.log(this); // in strict mode it is undefined else window obj
// }
// x();

// this with objects
// const obj={
//    a:10,
//    x:function(){
//      console.log(this.a);    // here this refers to obj, so this.a=obj.a=10
//     }
// }
// obj.x();

// // call apply and bind methode(sharing objects)
//  const student={
//     name:"Vivek",
//     printName:function(){
//         console.log(this.name); // Vivek
//     }
//  }

//  const student2={
//     name:"Ankush",
//  }

//  student.printName.call(student2); // student2=this; here we are providing student2 as this to printName method of student obj, so it will print Ankush

 // this with arrow functions

//  const obj={
//     name:"Vivekk",
//     x:function(){
//         setTimeout(()=> {
//             console.log(this) // obj as this is inside a function and arrow function does not have its own this so it will refer to parent obj which is obj
//         }, 0);
//     }
//  }
//  obj.x();

//  const obj2={
//     name:"Vivekk",
//     x:()=>{
//             console.log(this); // window
//     }                // here a itself is an arrow function so it does not have its own this so it will refer to parent obj which is window obj
//  }

// const obj2={
//     name:"Vivekk",
//     x:function(){
//         const y=()=>{
//             console.log(this); // obj2 as this is inside a function and arrow function does not have its own this so it will refer to parent obj which is obj2
//         }                       // here enclosing lexical context of y is functiion x() and this inside x() refers to obj2 so this inside y() will also refer to obj2
//         y();
//     }
//  }
//  obj2.x();


// const user = {
//   name: "Alice",
//   greet() {
//     console.log(this);
//   }
// };
 
// user.greet(); // Alice
// const greetFn = user.greet;
// greetFn(); // undefined
