// function parent(){
//     function child(){
//         console.log(a);

//         function child2(){
//             var a = 20;
//             console.log(b)
//         }

//         child2()
//     }
//     child()
// }

// parent()

/////////////////////////
// function parent(){
//     function child(){
//         console.log(a); //undefined
//         var a = 20;
//         function child2(){
//             var a = 20;
//             console.log(a) //20
//         }
//          child2()
//     }
//     child()
// }


// parent()


////////////////////////
// function parent(){
//     var a = 10;
//     function child(){
//         console.log(a)
//       }
//     return child
   
// }

// let functionReceived = parent()
// console.log(functionReceived())

////////////////////////
// const exec=testparent();
// console.log(exec());
// function testparent(){
//     var a = 10;
//     function child(){
//         let a=120;
//         console.log(a)
//       }
//     return child
   
// }

//////////////////////////
// function grandParent(){
//     // console.log(a);
//     // var a=2;
//     function child1(){
//         let a=23;
//         console.log(a);
//     }
//     var a=120;
//     function child2(){
//         console.log(a);
//     }
//     child1();
//     child2();
// }
// const res=grandParent();
// console.log(res);
// o/p: undefined 23 120

//////////////////////////////////
// parent()
// function parent(){
//     var a = 20
//     function child(){
//         console.log(a);
//         function child2(){
//             console.log(a)
//         }
//         child2()
//     }
//     child()

// }
// o/p: 20 20

////////////////////////////////
// function parent(){
//     var a = 10;
//     function child(){
//         var b = 20;
//         console.log(a)

//         function child2(){
//             console.log(a+b)
//         }
//         return child2
//     }
//     return child
// }
// let functionReceived = parent()
// console.log(functionReceived)

// let child2Recieved = functionReceived()
// child2Recieved()
// o/p:10 30

////////////////////////////
// function parent(){
//     var a = 10;
//     function child1(){
//         var b = 20;

//         function child2(){
//             console.log(a+b)
//         }
//         b = 120;  // b is updated to 120 before child2 is called or before lexical scope is evaluated, so it will print 130
//         return child2
//     }

//     return child1
// }

// let child1Recieved = parent()

// let child2Recieved = child1Recieved()

// child2Recieved();

// o/p:130


