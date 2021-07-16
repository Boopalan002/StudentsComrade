
//  PAGE RELOAD +++++++++++++++++++++++++++++++++

const pageReload=document.querySelector('.logo');

pageReload.addEventListener('click',()=>{
    window.location.reload();
})


//  HAMBURGER MENU+++++++++++++++++++++++++++++


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


//  QUOTE GENERATED+++++++++++++++++++++++++++++++

const quote=document.querySelector('#generatedQuote');
const author=document.querySelector('#authorName');
const quoteBtn=document.querySelector('.quote-btn');

var randomNum;

quoteBtn.addEventListener('click',()=>{
    


    fetch("https://type.fit/api/quotes")

        .then((response)=>{
            return response.json();
        })
    
            .then((data)=>{
                randomNum=Math.floor(Math.random()*1642);
                quote.innerText=data[randomNum].text;
                author.innerText=data[randomNum].author;
            })   
         
        .catch(()=>{   
            alert('OOPS! Slow network or api link broke');             
        })    

 });


//  SCROLL UP BUTTON++++++++++++++++++++++++++++++

const goTopBtn=document.querySelector('.scroll-up-BtnCont');


window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 300){
        goTopBtn.classList.add('active');
    }else{
        goTopBtn.classList.remove('active');
    }
})


// FIREBASE STUFF......


//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyDlVMPXf8Zog9J_49pCGwU1MFrWNCy3a1A",
//     authDomain: "student-s-comrade.firebaseapp.com",
//     projectId: "student-s-comrade",
//     storageBucket: "student-s-comrade.appspot.com",
//     messagingSenderId: "794662227845",
//     appId: "1:794662227845:web:d62e2381b46bb37eec7eec"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

