const object1 = { a: 1, b: 2, c: 3 };
console.log(Object.entries(object1).map(([key,val])=>[key,val*2]));

const object2 = Object.fromEntries(
  Object.entries(object1).map(([key, val]) => [key, val * 2])
);
console.log(object2);

// function test(name,cb){
//   setTimeout(() => {
//    cb(name)
//   }, 2000);
// }

// console.log(test("Vivek",function(name){
// console.log(name);

// }));


