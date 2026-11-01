// function x(){
//     var y = 10;
//     console.log("Hello from function x");
//     function z(){
//         console.log("Hello from function z", y);
//     }
//     z();
// }
// x();

// function x(){
//     var y = 10;
//     function z(){
//         console.log( y);
//     }
//     return z;
// }
// var a= x(); // here z is a closure because it has access to the variable y from the outer function x even after x has finished executing.
// a(); // calling the closure to see the output


// function x(){
//     var y = 10;
//     function z(){
//         console.log( y);
//     }
//     y=100;
//     return z;
// }
// var a= x(); // here z is a closure because it has access to the variable y from the outer function x even after x has finished executing.
// a(); // 100 as the value of y is changed to 100 before returning the closure z.

//nested closures//

// function a(){
//     var x = 10;
//     function b(){
//         var y = 20;
//         function c(){
//             console.log(x,y);
//         }
//         c();
//     }
//     b();
// }
// a(); // 10 20 as the closure c has access to both x and y from the outer functions a and b respectively.

/////////////

// var x=1;
// a();
// b();
// console.log(x);
// function a(){
//     var x=10;
//     console.log(x);
// }

// function b(){
//     var x=100;
//     console.log(x);
// }

