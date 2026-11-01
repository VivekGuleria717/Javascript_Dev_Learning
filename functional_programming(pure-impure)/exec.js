//impure functions

var c = 0;
function sum(a, b){
    // console.log(c++,'c');
    
  return a + b + c++;
}

console.log(sum(2, 3)); // 5
console.log(sum(2, 3)); // 6