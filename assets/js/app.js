

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
       logo[0].style.backgroundImage="url(../assets/img/logol.png)";

    } 

    document.documentElement.setAttribute('data-theme', target);
}

// Ham Menu

function toggleHam(){

    let appear = document.getElementsByClassName('main-nav');
    let ham = document.getElementsByClassName('sideMenu-ham');
    appear[0].classList.toggle("active-menu");
    ham[0].classList.toggle("open");

}
function swiperVertical() {
    
const swiper = new Swiper('.swiper', {

    direction: 'vertical',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },

    mousewheel: {
        releaseOnEdges: true,
    }

  });
}

// Button

function buttonSmooth(content){
    document.getElementById(content).scrollIntoView({behavior: 'smooth'});
}

// SendMail

function sendMail() {
    let subject = document.querySelectorAll('#subject')[0].value;
    let message = document.querySelectorAll('#message')[0].value;
    window.location = "mailto:falseMail@falseMail.com?subject="+subject+"&body="+message;
}