// immediately invoked func
// (function square(num){
//     console.log(num*num); //25
// })(5)

/// Q2 ///

// (function(x){
//     return (function (y){
//         console.log(y); //2
//         console.log(x); //1 it have parent closure scope
//     })(2)
// })(1);

/// Q3 ///

// for(let i=0;i<5;i++){
//     setTimeout(() => {
//      console.log(i); // 0 1 2 3 4 (let is block scoped)
        
//     }, i*1000);
// }

/// Q4 ///

// for(var i=0;i<5;i++){
//     setTimeout(() => {
//      console.log(i); // 5 5 5 5 5 (var is not  block scoped)
//     }, i*1000);
// }

/// Q5  callback functions--> function passed as arguments to another func to mark completion of some task later


///   ///
function fn(){
    console.log(arguments); //  { '0': 1, '1': 2, '2': 3 }but arguments not work for arrow func
}
fn(1,2,3);

let user={
    usernme:'john',
    rc1:()=>{
        console.log('1st',this.usernme); //undefined because arrow func does not have its own this
    },
    rc2(){
        console.log('2nd',this.usernme); //john because normal func have its own this
    }
}
console.log(user,'ss');
console.log(user.rc1());
console.log(user.rc2());

/////////////

