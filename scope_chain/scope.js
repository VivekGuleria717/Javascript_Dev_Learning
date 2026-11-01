function a(){
    
c();

function c(){
console.log(b); // 10 as Global context is accessible everywhere in code
}

}
var b=15;
a();
