// console.log("start");
// function importantAction(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Subscribe to ${username}`);
//         }, 2000);
//     })

// }

// function likeTheVideo(video) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         resolve(`please like my ${video}`)
//     }, 2000)
//     })
    
// }
// function shareTheVideo(video) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         resolve(`please share my on ${video} with your friends`)
//     }, 2000)
//     })
    
// }
// importantAction("Him_Vlogs")
// .then((res)=>{
//     console.log("1st", res);
//     likeTheVideo("JS interview questions").then((res)=>{
//          console.log("2nd", res);
//          shareTheVideo("JS interview questions").then((res)=>{
//             console.log("3rd",res);
//          })
//     })
// })
// .catch((error)=>{
//     console.log(error);
// })
    
// console.log("stop");


//////------------------///////
let p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Success one')
    }, 10000);
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Success two')
    }, 20000);
})

const test= async()=>{
console.log('start');

const res1=await p1;
console.log('hl');
console.log(res1);

console.log("midway");

const res2=await p2;
console.log(res2);
console.log('h2 end');
}

test();


 
// async function test1() {
//     console.log('start');
//     const data=await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     console.log(data);
//     const jasonVal=await data.json();
//     console.log(jasonVal);
// }

// test1();
