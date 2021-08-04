
var screenWidth=window.screen.width;



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


const midLine1=document.querySelector('.mid-line1');
const midLine2=document.querySelector('.mid-line2');


const navUl=document.querySelector('.navUl');
var count=0;
hamburger.addEventListener('click',()=>{
    
    // count++;

    // if(count%2!=0){
    //     navUl.style.transition="all 1s  cubic-bezier(0.04, 1.84, 0.63, 0.63)";
    // }else{
    //     navUl.style.transition="all .7s ease-in-out";
    // }
    
    nav.classList.toggle('show');


        line1.classList.toggle('changetheline1');
        line3.classList.toggle('changetheline3');

        midLine1.classList.toggle('changeMidLine1');
        midLine2.classList.toggle('changeMidLine2');

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
        quote:"I think a simple rule of business is, if you don't actually make a lot of progress.",
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
        image:"ElonMusk",
        quote:"When something is important enough, you do it even if the odds are not in your favor.",
        author:"Elon Musk",
    },

    {
        image:"AbdulKalam",
        quote:"Winners are not those who never fail but those who never quit.",
        author:"Dr APJ Abdul Kalam",
    },

]

const quoteBtn=document.querySelector('.quote-btn');
const quoteImg=document.querySelector('#quote-Img');
const theQuote=document.querySelector('#actual-quote');
const theAuthor=document.querySelector('#author-name');
const quoteBackDround=document.querySelector('#contOfQuote');


var count=0;

quoteBtn.addEventListener('click',()=>{
    

    if(screenWidth<=520){
        if(arrOfQuotes[count].image==="MarieCurie"){
            quoteBackDround.style.backgroundPositionY="-15px";
        }else{
            quoteBackDround.style.backgroundPositionY="0";
        }
        quoteBackDround.style.backgroundImage=`url(AuthorsImg/${arrOfQuotes[count].image}.jpg)`;
    }else{
        quoteImg.style.backgroundImage=`url(AuthorsImg/${arrOfQuotes[count].image}.jpg)`;
    }
    
    theQuote.innerHTML=arrOfQuotes[count].quote;
    theAuthor.innerHTML=arrOfQuotes[count].author;
    count++;
    console.log("hellll");

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


// ANIMATION STUFF ++++++++++++++++++++++++++++++++++++++

const motoHead=document.querySelector('.team-moto-txt');
const motoPara=document.querySelector('.team-moto-para');



window.addEventListener('scroll',()=>{

    if(screenWidth<=500){
        
        if(window.pageYOffset > 2500){
            motoHead.classList.add('lift-moto-para');
        }else{
            motoHead.classList.remove('lift-moto-para')
        }
        
        if(window.pageYOffset > 2550){
            motoPara.classList.add('lift-moto-para');
        }else{
            motoPara.classList.remove('lift-moto-para');
        }
    }else if(screenWidth<=650){
        
        if(window.pageYOffset > 2420){
            motoHead.classList.add('lift-moto-para');
        }else{
            motoHead.classList.remove('lift-moto-para')
        }
        
        if(window.pageYOffset > 2480){
            motoPara.classList.add('lift-moto-para');
        }else{
            motoPara.classList.remove('lift-moto-para');
        }
        
    }else if(screenWidth<=1000){
        
        if(window.pageYOffset > 2110){
            motoHead.classList.add('lift-moto-para');
           
        }else{
            motoHead.classList.remove('lift-moto-para')
        }
        
        if(window.pageYOffset > 2160){
            motoPara.classList.add('lift-moto-para');
        }else{
            motoPara.classList.remove('lift-moto-para');
        }

    }else if(screenWidth<=1070){
                
        if(window.pageYOffset > 1800){
            motoHead.classList.add('lift-moto-para');
            
        }else{
            motoHead.classList.remove('lift-moto-para')
        }
        
        if(window.pageYOffset > 1850){
            motoPara.classList.add('lift-moto-para');
        }else{
            motoPara.classList.remove('lift-moto-para');
        }
    }else{
        if(window.pageYOffset > 1530){
            motoHead.classList.add('lift-moto-para');
           
        }else{
            motoHead.classList.remove('lift-moto-para')
        }

        if(window.pageYOffset > 1600){
            motoPara.classList.add('lift-moto-para');
        }else{
            motoPara.classList.remove('lift-moto-para');
        }
    }

})




// ++++++++++++++++++++++++Search Box+++++++++++++++++++++++++++++++++++++++++++++


const depArr=[
    
    {
        dept:"bsccs",
        link:" ",
        deptName:"B.Sc.CS",
    },
    
    {
        dept:"computerscience",
        link:" ",
        deptName:"B.Sc.CS",
    },
    
    {
        dept:"cs",
        link:" ",
        deptName:"B.Sc.CS",
    },
    
    {
        dept:"bscmaths",
        link:" ",
        deptName:"B.Sc.Maths",
    },
    
    {
        dept:"bscbiotech",
        link:"departments@kgcas/Biotech.html",
        deptName:"B.Sc.Bio Tech",
    },
    
    {
        dept:"bscecs",
        link:"departments@kgcas/BscECS.html",
        deptName:"B.Sc.ECS",
    },
    
    {
        dept:"ecs",
        link:"departments@kgcas/BscECS.html",
        deptName:"B.Sc.ECS",
    },
    
    {
        dept:"bscit",
        link:" ",
        deptName:"B.Sc.IT",
    },
    
    {
        dept:"it",
        link:" ",
        deptName:"B.Sc.IT",
    },
    
    {
        dept:"bscct",
        link:" ",
        deptName:"B.Sc.CT",
    },
    
    {
        dept:"ct",
        link:" ",
        deptName:"B.Sc.CT",
    },
    
    {
        dept:"bca",
        link:"departments@kgcas/science_BCA.html",
        deptName:"BCA",
    },
    
    {
        dept:"baenglit",
        link:"departments@kgcas/maenglish.html",
        deptName:"B.A.Eng Lit",
    },
    
    {
        dept:"baeng",
        link:"departments@kgcas/maenglish.html",
        deptName:"B.A.Eng Lit",
    },
    
    {
        dept:"bba",
        link:" ",
        deptName:"BBA",
    },
    
    {
        dept:"bbaca",
        link:" ",
        deptName:"BBA.CA",
    },
    
    {
        dept:"bcom",
        link:"departments@kgcas/Bcom.html",
        deptName:"B.Com",
    },
    
    {
        dept:"bcomca",
        link:"departments@kgcas/BCom_CA.html",
        deptName:"B.Com.CA",
    },
    
    {
        dept:"bcomit",
        link:"departments@kgcas/BCom_IT.html",
        deptName:"B.Com.IT",
    },
    
    {
        dept:"bcompa",
        link:"departments@kgcas/BCom_PA.html",
        deptName:"B.Com.PA",
    },
    
    {
        dept:"maenglit",
        link:"departments@kgcas/MAEng.html",
        deptName:"M.A.Eng Lit",
    },
    
    {
        dept:"maeng",
        link:"departments@kgcas/MAEng.html",
        deptName:"M.A.Eng Lit",
    },
    
    {
        dept:"mcomib",
        link:"departments@kgcas/MCom_IB.html",
        deptName:"M.Com.IB",
    },

        
    {
        dept:"mcom",
        link:"departments@kgcas/MCom_IB.html",
        deptName:"M.Com.IB",
    },

        
    {
        dept:"msccs",
        link:"",
        deptName:"M.Sc.CS",
    },

        
    {
        dept:"computerscience",
        link:"",
        deptName:"M.Sc.CS",
    },
    
    {
        dept:"cs",
        link:"",
        deptName:"M.Sc.CS",
    },
        
    {
        dept:"mscss",
        link:"departments@kgcas/MscSS.html",
        deptName:"M.Sc.SS",
    },
        
    {
        dept:"mscmaths",
        link:" ",
        deptName:"M.Sc.Maths",
    },

];

var emptArray=[];



const searchIcon=document.querySelector('.searchIcon');
const searchBoxCont=document.querySelector('.searchBox-cont');
const closingCross=document.querySelector('.closing-cross');

searchIcon.addEventListener('click',()=>{
    searchBoxCont.style.top=`${pageYOffset}px`;

    closingCross.classList.remove('animation-for-closeBtn');
})





const goBtn=document.querySelector('.Go-btn');
const actualInput=document.querySelector('.actual-input');
const searchedDeptUL=document.querySelector('#searchedDept');


goBtn.addEventListener('click',()=>{

    searchedDeptUL.innerHTML=" ";

    let typed=actualInput.value;
    typed=typed.toLowerCase();

   
    let modifiedInput=makeStringShort(typed);

 


    if(modifiedInput==="english" || modifiedInput==="eng"){
        for(let i=0;i<depArr.length;i++){
            if(depArr[i]["dept"]==="baenglit" || depArr[i]["dept"]==="maenglit"){
                emptArray.push(depArr[i]);
            }
        }
    }else if(modifiedInput==="maths" || modifiedInput==="mat" || modifiedInput==="math"){
        for(let i=0;i<depArr.length;i++){
            if(depArr[i]["dept"]==="bscmaths" || depArr[i]["dept"]==="mscmaths"){
                emptArray.push(depArr[i]);
            }
        }
    }else if(modifiedInput==="biotech" || modifiedInput==="bio"){
        for(let i=0;i<depArr.length;i++){
            if(depArr[i]["dept"]==="bscbiotech"){
                emptArray.push(depArr[i]);
                break;
            }
        }
    }else if(modifiedInput==="bsc"){
        for(let i=0;i<depArr.length;i++){
            if(depArr[i]["dept"][0]==='b' && depArr[i]["dept"][1]==='s' && depArr[i]["dept"][2]==='c'){
                emptArray.push(depArr[i]);
            }
        }
    }else if(modifiedInput==="msc"){
        for(let i=0;i<depArr.length;i++){
            if(depArr[i]["dept"][0]==='m' && depArr[i]["dept"][1]==='s' && depArr[i]["dept"][2]==='c'){
                emptArray.push(depArr[i]);
            }
        }
    }else if(modifiedInput==="bcom"){
        for(let i=0;i<depArr.length;i++){
            if(depArr[i]["dept"][0]==='b' && depArr[i]["dept"][1]==='c' && depArr[i]["dept"][2]==='o'){
                emptArray.push(depArr[i]);
            }
        }
    }else{

        for(let i=0;i<depArr.length;i++){
            if(depArr[i]["dept"]===modifiedInput){
                emptArray.push(depArr[i]);
            }
        }
    }




    if(emptArray.length===0){
        printerrormsg();
    }else{
        displaySearchedDept(emptArray);
    }


    emptArray=[];
})

function makeStringShort(intputStr){
    
    let arr=Array.from(intputStr);
    arr= arr.filter((e)=>(e!=" " && e!="."));
    arr=arr.join("");
    return arr;
}

function displaySearchedDept(searchedArrofDept){
    
    // console.log(searchedArrofDept);

    for(let i=0;i<searchedArrofDept.length;i++){
        
        let liOfDept=document.createElement('li');
        let pOfDept=document.createElement('p');
        let arrowOfDept=document.createElement('h3');

        let actualArrow=document.createElement('i');

        
        pOfDept.innerHTML=searchedArrofDept[i]["deptName"];
        actualArrow.classList.add('fas');
        actualArrow.classList.add('fa-arrow-right');

        arrowOfDept.appendChild(actualArrow);
        liOfDept.appendChild(pOfDept);
        liOfDept.appendChild(arrowOfDept);

 

        liOfDept.addEventListener('click',()=>{
            window.location.href = `${searchedArrofDept[i]["link"]}`;
        })

        searchedDeptUL.appendChild(liOfDept);
 
        
    }
}


function printerrormsg(){
    let sorryText=document.createElement('p');
    sorryText.classList.add('sryTxtCont');
    sorryText.innerHTML="OOPS! Seems like you misspelled the department name.";
    sorryText.style.textAlign="center";
    searchedDeptUL.appendChild(sorryText);
    console.log(searchedDeptUL);
}



closingCross.addEventListener('click',()=>{
    
    closingCross.classList.add('animation-for-closeBtn');
    
    searchBoxCont.style.top="-120%";

    searchedDeptUL.innerHTML=" ";
    actualInput.value="";
})