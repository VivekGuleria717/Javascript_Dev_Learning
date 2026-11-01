const btn=document.querySelector('.increment_btn');
const btnPress=document.querySelector('.increment_pressed');
const count=document.querySelector('.increment_count');

var triggerCount=0;
var pressedCount=0;
const debounceCount=_.debounce(()=>{
count.innerHTML= ++triggerCount;
},800);

btn.addEventListener('click',()=>{
    btnPress.innerHTML = ++pressedCount;
    debounceCount()
})