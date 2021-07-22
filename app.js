
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




//  QUOTE GENERATOR+++++++++++++++++++++++++++++++


const arrOfQuotes=[
    {
        image:"MotherTeresa",
        quote:"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author:"Mother Teresa",
    },

    {
        image:"SteveJobs",
        quote:"Don’t let the noise of others’ opinions drown out your own inner voice.",
        author:"Steve Jobs",
    },

    {
        image:"AlbertEinstein",
        quote:"Try not to become a man of success. Rather become a man of value.",
        author:"Albert Einstein",
    },

    {
        image:"MarieCurie",
        quote:"Nothing in life is to be feared. It is only to be understood.",
        author:"Marie Curie",
    },

    {
        image:"BillGates",
        quote:"If you are born poor it’s not your mistake, but if you die poor it’s your mistake.",
        author:"Bill Gates",
    },
  
    {
        image:"MarkZuckerberg",
        quote:"I think a simple rule of business is, if you dn actually make a lot of progress.",
        author:"Mark Zuckerberg",
    },

    {
        image:"JeffBezos",
        quote:"If you never want to be criticized, for goodness' sake don't do anything new.",
        author:"Jeff Bezos",
    },

    
    {
        image:"StephenHawking",
        quote:"Although I cannot move and I have to speak through a computer, in my mind I am free.",
        author:"Stephen Hawking",
    },

    {
        image:"SundarPichai",
        quote:"As a leader, it is important to not just see your own success, but focus on the success of others.",
        author:"Sundar Pichai",
    },


    {
        image:"NikolaTesla",
        quote:"Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.",
        author:"Nikola Tesla",
    },

    {
        image:"ThomasEdison",
        quote:"Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author:"Thomas A. Edison",
    },


    {
        image:"AbrahamLincoln",
        quote:"Always bear in mind that your own resolution to success is more important than any other one thing.",
        author:"Abraham Lincoln",
    },

    {
        image:"HelenKeller",
        quote:"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author:"Helen Keller",
    },

    {
        image:"MahatmaGandhi",
        quote:"If we are to teach real peace in this world, and if we are to carry on a real war against war, we shall have to begin with the children.",
        author:"Mahatma Gandhi",
    },

    {
        image:"AbdulKalam",
        quote:"Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
        author:"Dr APJ Abdul Kalam",
    },

    
    {
        image:"ElonMusk",
        quote:"When something is important enough, you do it even if the odds are not in your favor.",
        author:"Elon Musk",
    },


]

const quoteBtn=document.querySelector('.quote-btn');
const quoteImg=document.querySelector('#quote-Img');
const theQuote=document.querySelector('#actual-quote');
const theAuthor=document.querySelector('#author-name');


var count=0;

quoteBtn.addEventListener('click',()=>{
    

    quoteImg.style.backgroundImage=`url(AuthorsImg/${arrOfQuotes[count].image}.jpg)`;
    theQuote.innerHTML=arrOfQuotes[count].quote;
    theAuthor.innerHTML=arrOfQuotes[count].author;
    count++;
  
    if(count===arrOfQuotes.length){
        count=0;
    }


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

  


    // fetch("https://type.fit/api/quotes")

    //     .then((response)=>{
    //         return response.json();
    //     })
    
    //         .then((data)=>{
    //             randomNum=Math.floor(Math.random()*1642);
    //             quote.innerText=data[randomNum].text;
    //             author.innerText=data[randomNum].author;
    //         })   
         
    //     .catch(()=>{   
    //         alert('OOPS! Slow network or api link broke');             
    //     })  