//1. Print nested object keys
const sampleObject =  {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    },
    f: 4
};
function printObjectKeys(obj, depth = 0) {
    for (let key in obj) {
        console.log(' '.repeat(depth * 2) + key);
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            printObjectKeys(obj[key], depth + 1);
        }
    }
}
// printObjectKeys(sampleObject);


//2.Deep copy of object
const original = {
  name: "Vivek",
  address: {
    city: "Mandi"
  }
};

function deepCopy(obj){
    if(typeof obj !=='object' || obj===null){
        return obj; // primitive types
    }
    const copy= Array.isArray(obj) ? [] : {};
    for( let key in obj){
      if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}

const copied = deepCopy(original);
copied.address.city="Shimla";
console.log('org',original);
console.log('cop',copied);


