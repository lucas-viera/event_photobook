const couple_name = document.getElementById("couple-name");
const percentage = document.getElementById("percentage");
const loadingText = document.getElementsByClassName('loading-percentage');
const background = document.getElementsByClassName('background');

let loadValue = 0;
let loadInterval = setInterval(blurring, 30); //3 seconds
let namesInterval = setInterval(welcome, 4000);



function blurring(){
    loadValue++;
    if (loadValue > 99){
        clearInterval(loadInterval);
    }
    percentage.innerText = `${loadValue}%`;
    percentage.style.opacity = scale(loadValue, 0, 100, 1, 0);
    background[0].style.filter = `blur(${scale(loadValue, 0, 100, 30, 0)}px)`;
}

function welcome(){
    couple_name.classList.toggle("fadeIn");
    percentage.classList.toggle("fadeOut");
    clearInterval(namesInterval);
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num-in_min) * (out_max-out_min)) / (in_max-in_min) + out_min
}
