
const navOpenButton = document.querySelector('#nav-open');
const navCloseButton = document.querySelector('#nav-close');
const navLinkButton = document.querySelector('#about-us');
const navLinkButton1 = document.querySelector('#feaurets');
const navLinkButton2 = document.querySelector('#contactus');
const navLinkButton3 = document.querySelector('#comingsoon');
const navLinkButton4 = document.querySelector('#kinfig-logo-white');


const navElement = document.querySelector('nav');


navOpenButton.addEventListener('click',function(){
    navElement.classList.remove('hide');
});

navCloseButton.addEventListener('click',function(){
    navElement.classList.add('hide');
});

navLinkButton.addEventListener('click',function(){
    navElement.classList.add('hide');
});

navLinkButton1.addEventListener('click',function(){
    navElement.classList.add('hide');
});

navLinkButton2.addEventListener('click',function(){
    navElement.classList.add('hide');
});

navLinkButton3.addEventListener('click',function(){
    navElement.classList.add('hide');
});

navLinkButton4.addEventListener('click',function(){
    navElement.classList.add('hide');
});