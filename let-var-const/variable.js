// va let const //
// scope //
 
// {
//     var a=10;
// }

// {
//     let a=20;
//     console.log(a); // 20
    
// }
// console.log(a); // in var case 10 , in let and const case  undefined becasue they are block scoped

// Variable shadowing //
function test(){
    var a="Hello";
    let b="Bye";
    if(true){
         let  a="Hi"; // valid
        //   var b="Goodbye"; // INVALID :illegal shadowing as b is decalred with let outside so block scope variable cannot changed to global scope
            let b="Goodbye" //valid
         console.log(a);
        console.log(b);
        
    }
}
test();

///   Declarartion ///

// we cannot redecalre let and const in same scope but var can
// let a; invalid redeclaration
// let a;

// initilization //

// let b; // valid
// var a; // valid
// const c; // invlaid as const always have to initialize with some value
// const c=9 // valid
// we can re-initialize let and var but not const variables
const a=10
{
    const a=10;
    a=20; //const is  incapable of re-initialization
    console.log(a); // 20
}
