const loadtext =document.querySelector('.textload');
const bg = document.querySelector('.bg');

let load = 0;
let int = setInterval(blurring, 15);

function blurring(){
    load++;
    if(load===100){
        clearInterval(int);
    }
    // loadtext.innerText = load.toString() + '%';
    loadtext.innerText = load + '%'
    let level = 100 - parseInt(load);
    bg.style.filter = `blur(${level}px)`
}