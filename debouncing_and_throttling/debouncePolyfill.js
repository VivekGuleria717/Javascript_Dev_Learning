// no need of lodash cdn
const btn = document.querySelector('.increment_btn');
const btnPress = document.querySelector('.increment_pressed');
const count = document.querySelector('.increment_count');

var triggerCount = 0;
var pressedCount = 0;

const myDebounce = (cb, delay) => {
    let timer;


    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args)
        }, delay);
    }
}

const debounceCount = myDebounce(() => {
    count.innerHTML = ++triggerCount;
}, 3000);

btn.addEventListener('click', () => {
    btnPress.innerHTML = ++pressedCount;
    // console.log(debounceCount);

    debounceCount()
})