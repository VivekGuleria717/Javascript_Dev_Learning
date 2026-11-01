// map, filter and reduce
//MAP=> used to create new array form existing array by applying function to each elem of first array

const nums=[1,2,3,4];
const multiplyThree=nums.map((ele,index)=>{ 
    return ele*2;
});
console.log(multiplyThree); // [2,4,6,8]

// Filter--> return those elem to output array which fulfill the condition

const moreThanTwo=nums.filter((ele,idx)=> ele>2);
console.log(moreThanTwo); // [3,4]

//Reduce

const sum=nums.reduce((acc,curr,i,arr)=>{ return acc+=curr},0)
console.log(sum);

// map vs foreach //
const arr=[2,5,3,4,7];
const mapRes=arr.map((ele,i)=>{
    return ele+2;
})

const foreachRes=arr.forEach((el)=>{
    return el+2;
})

console.log(mapRes,foreachRes); //[ 4, 7, 5, 6, 9 ] undefined


