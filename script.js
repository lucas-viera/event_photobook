const loadingText = document.querySelector('.loading-percentage');
const background = document.querySelector('.background');

let loadValue = 0;
let interval = setInterval(blurring, 30); //in miliseconds

function blurring(){
    loadValue++;
    if (loadValue > 99){
        clearInterval(interval);
    }
    loadingText.innerText = `${loadValue}%`;
    loadingText.getElementsByClassName.opacity = scale (loadValue, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(loadValue, 0, 100, 30, 0)}px)`;
}


function welcome(){
    loadingText.style.display = `none`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num-in_min) * (out_max-out_min)) / (in_max-in_min) + out_min
}
