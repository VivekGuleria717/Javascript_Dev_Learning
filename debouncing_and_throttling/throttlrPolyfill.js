const btn=document.querySelector('.increment_btn');
const btnPress=document.querySelector('.increment_pressed');
const count=document.querySelector('.increment_count');

var triggerCount=0;
var pressedCount=0;
const myThrottle=(cb,delay)=>{
    let last=0;
    return (...args)=>{
        let now=new Date().getTime();
        if(now-last < delay) return; // if current time - lst time when event occured differnece< delay, don't invoke API else invoke
        last=now;
        return cb(...args)
    }
}
const throttledCount=myThrottle((x)=>{
triggerCount+=1;
count.innerHTML= triggerCount;
},1000);

btn.addEventListener('click',()=>{
    btnPress.innerHTML = ++pressedCount;
    throttledCount('hello')
})