const arr=[
    {key:'name',value:'Vivek'},
    {key:'age',value:28}
]
const craeteDynamicObj=(array)=>{
   return Object.fromEntries(array.map(({key,value})=>[key,value]));
}

console.log(craeteDynamicObj(arr));
