//currying using bind //
let multiply= function(x,y){
    console.log(x*y);
}

let multiplyByTwo=multiply.bind(this,2);// 2=x
// multiplyByTwo(10); // 10=y

// currying using closures //
let multiplyy=function(x){
    return function(y){
        console.log(x*y);  //6
        
    }
}
let mul=multiplyy(2);//x=2
// mul(3);//y=3



//////////////
// evaluate-> sum->a+b
// multiplication->a*b
// subtraction->a-b
// division-> a/b

function evaluate(operator){
    return function(a,b){
        if (operator=='sum') console.log(a+b);
        if (operator=='mul') console.log(a+b);
        if (operator=='sub') console.log(a+b);
        if (operator=='div') console.log(a+b);
        return console.log('invalid oprator');
    }
}

const exec=evaluate('summ');
// exec(3,4)

////////////////////////
// sum(a+b+c)--> sum(a)(b)(c)
(function sum(a){
    // return  function(b){
    //     return function (c){
            //  console.log(a);
    //     }
    // }
})(3);

// sum(3)(4)(5)

/// sum(a+b+c+......+n)---->sum(a)(b)(c).....(n) ///
function suminfi(a){
    return function (b){
        if(b)  return suminfi(a+b);
        return a;
    }
}

console.log(suminfi(3)(8)(1)(2)(3)());

