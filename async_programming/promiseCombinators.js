const p1= new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("P1 is rejected in 3 sec")
    }, 5000);
});

const p2= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("P2 is resolved in 1 sec")
    }, 1000);
});

const p3= new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("P3 is rejected in 2 sec")
    }, 4000);
});

Promise.all([p1,p2,p3]).then(res=>console.log(res), err=>console.log(err));