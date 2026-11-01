// this inside nested func
'use strict'
console.log(this); // without use strict {} else undefined
var obj = {
  prop: 'I am a property',
  method: function() {
    console.log(this); // without use stirct { prop: 'I am a property', method: [Function: method] } else same
    var nestedFunction = function() {
      console.log(this); // without use stirct global else undeined
    };
    nestedFunction();
  }
};

console.log(obj.method()); //without use stirct  undefined else undefined

