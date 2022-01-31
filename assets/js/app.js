
//DARK MODE

function changeMode(){

    let ball = document.getElementsByClassName('mode-container__item--ball');
    let bg = document.getElementsByClassName('mode-container__item');
    ball[0].classList.toggle("changeMode");
    bg[0].classList.toggle("changeColor");

}