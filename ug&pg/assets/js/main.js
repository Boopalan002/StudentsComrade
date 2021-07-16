const hamburger=document.querySelector('.hamBurger');
const nav=document.querySelector('.navUl');

const line1=document.querySelector('.line1');
const line2=document.querySelector('.line2');
const line3=document.querySelector('.line3');

hamburger.addEventListener('click',()=>{
    nav.classList.toggle('show');

    line1.classList.toggle('changeline1');
    line2.classList.toggle('changeline2');
    line3.classList.toggle('changeline3');
})