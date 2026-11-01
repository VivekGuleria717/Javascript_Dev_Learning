// Actual 
// Array.map((ele,idx,arr)=>{})

// custom map polyfill
{}
const nums=[1,2,3,4];
// Array.prototype.myMap=function(cb){
//     let temp=[]; // as we return new array by map func
//     for(let i=0;i<this.length;i++){
//     temp.push(cb(this[i],i, this)) // this refers to actual array on which we applying map
//     }
//    return temp;
// }


// const multiplyThree=nums.myMap((ele,index,arr)=>{ 
//     return ele*2;
// });
// console.log(multiplyThree); //[2,4,6,8]

// custom filter polyfill //

// Array.prototype.myFilter=function(cb){
//     let temp=[];
//     for(let i=0;i<this.length;i++){
//         if(cb(this[i],i,this)) temp.push(this[i])
//     }  
//     return temp;
// }

// const moreThanTwo=nums.myFilter((ele,idx,arr)=>{ return ele>2});
// console.log(moreThanTwo); // [3,4]

// custom reduce polyfill //
// nums.reduce((acc,curr,i,arr)=>{},0) ;// actual
Array.prototype.myReduce=function(cb,initialVal){
    console.log(this);
    
    var accumulator=initialVal;
    for(let i=0;i<this.length;i++){
        // if user forgot to provide inital value then reduce takes first elem of array as initial val and from 2nd elem consider accumlator
        accumulator=accumulator?cb(accumulator,this[i],i,this):this[i] 
    }
    return accumulator;
}

const sum=nums.myReduce((acc,curr,idx,arr)=>{ return acc+=curr},0)
console.log(sum); //10