// nested obj destructuring //
let user={
    name:"Piyush",
    age: 24,
    fullName:{
        first:"Piyush",
        last:"Agarwal",
    },
};

const {fullName:{first}}=user; 
console.log(first); //Piyush

/// ///
function getItems(fruitList,favoriteFruit,...args){
    console.log(favoriteFruit,'ggg');
    return [...fruitList,...args,favoriteFruit]
}

console.log(getItems(["banana","apple"],"pear","orange"));

// OBJECT REFRENCING //
let c={greeting:"Hey !"};
let d;
d=c;
c.greeting="Hello"; // value for obj c also change as both obj have same refernece
console.log(d.greeting); // hello

//
console.log({a:1}=={a:1}); // false as both obj have differnet addresses, object are compared by addresses
// console.log({a:1} === {a:1}); //false

//
let person={name:"Lydia"};
const members=[person];
person=null;
// person.name=null; // in this case inside member arr name is null
console.log(members); // [ { name: 'Lydia' } ]

// 
const value={number:10};
const multiply=(x={...value})=>{
    console.log(x.number*=2);
}

multiply(); //20
multiply(); //20
multiply(value); // 20 here x will get refernce of value obj so change in x will also change ib value obj
multiply(value); // 40

//////////////
function changeAgeAndReference(person){
    person.age=25;
    person={
        name:"John",
        age:50
    }
    return person;
}


const personObj1={
    name:"Alex",
    age:30,
};

const personObj2=changeAgeAndReference(personObj1);
console.log(personObj1); // { name: 'Alex', age: 25 }
console.log(personObj2); // { name: 'John', age: 50 }

// DEEP COPY/CLONING //
//object.assign()
// JSON.parse(JSON.stringify)
// spread operator {...obj}
// loadsh structured clone



 



