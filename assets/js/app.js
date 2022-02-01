
//DARK MODE

function changeMode(){

    let ball = document.getElementsByClassName('mode-container__item--ball');
    let bg = document.getElementsByClassName('mode-container__item');
    ball[0].classList.toggle("changeMode");
    bg[0].classList.toggle("changeColor");

}

function darkMode(){

    let theme = document.documentElement.getAttribute('data-theme');
    let logo = document.getElementsByClassName('logo-container');
    let target = "dark";
    if (theme === "dark") {
        
        target = "light";
       logo[0].style.backgroundImage="url(assets/img/logol.png)";

    } 

    document.documentElement.setAttribute('data-theme', target);
}

// Ham Menu

function toggleHam(){

    let appear = document.getElementsByClassName('main-nav');
    appear[0].classList.toggle("active-menu");

}