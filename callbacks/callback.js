

// function x(y){
//     console.log("I am x");
//     y();
     
// }


// x(function y(){
//     console.log("I am Y");
// }); // here func y is called callback function

function a(){
    var x=10;
    function b(){
        console.log(x);
    }
   b();
}
a();