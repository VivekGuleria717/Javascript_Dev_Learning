console.log("start");
function importantAction(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${username}`);
        }, 2000);
    })

}

function likeTheVideo(video) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        resolve(`please like my ${video}`)
    }, 2000)
    })
    
}
function shareTheVideo(video) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        resolve(`please share my on ${video} with your friends`)
    }, 2000)
    })
    
}
// importantAction("Him_Vlogs")
// .then((res)=>{
//     console.log("1st", res);
//     return likeTheVideo("JS interview questions");
// })
// .then((res)=>{
//     console.log(res);
//     return shareTheVideo("JS interview questions");
// })
// .then((res)=>{
//     console.log(res);
  
// })
// .catch((error)=>{
//     console.log(error);
// })
    
// console.log("stop");


// // 2nd ex //
// const firstPromise=new Promise((resolve,reject)=>{
//     resolve("first");
// })

// const secondPromise=new Promise((resolve,reject)=>{
//     resolve(firstPromise);
// })

// secondPromise.then((res)=>{
//     return res;
// }).then((res)=>
//     console.log(res) // first
// )

// Resolving promises recursively ///
function promiseRecurse(funcPromises){
    if(funcPromises.length===0) return;
    const currPromise=funcPromises.shift(); // get 1st elem of ar
    currPromise.then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
    promiseRecurse(funcPromises)
}

promiseRecurse([
   importantAction("Him_Vlogs"),
   likeTheVideo("JS interview questions"),
   shareTheVideo("JS interview questions")
])

