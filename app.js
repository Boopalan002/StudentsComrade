
var screenWidth=window.screen.width;
var heightofPage=window.screen.height



//+++++++++++++++++++++++++++++++++++PAGE RELOAD +++++++++++++++++++++++++++++++++

const pageReload=document.querySelector('.logo');

pageReload.addEventListener('click',()=>{
    window.location.reload();
})




//+++++++++++++++++++++++++++++++++HAMBURGER MENU+++++++++++++=++++++++++++++++++++++++



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

    nav.classList.toggle('show');


    line1.classList.toggle('changetheline1');
    line3.classList.toggle('changetheline3');

    midLine1.classList.toggle('changeMidLine1');
    midLine2.classList.toggle('changeMidLine2');

})



//+++++++++++++++++++++++++++++++++++++++++++++QUOTE GENERATOR+++++++++++++++++++++++++++++++


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

    setTheAuthorImg(count);

    changeTheQuote(count);

    count++;
    if(count===arrOfQuotes.length){
        count=0;
    }

});


function setTheAuthorImg(count){

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

}

function changeTheQuote(count){

    theQuote.innerHTML=arrOfQuotes[count].quote;
    theAuthor.innerHTML=arrOfQuotes[count].author;

}





 //+++++++++++++++++++++++++++++++++SCROLL UP BUTTON++++++++++++++++++++++++++++++++++

const goTopBtn=document.querySelector('.scroll-up-BtnCont');


window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 300){
        goTopBtn.classList.add('active');
    }else{
        goTopBtn.classList.remove('active');
    }
})


//++++++++++++++++++++++++++++++++++++ANIMATION STUFF ++++++++++++++++++++++++++++++++++++++

const motoHead=document.querySelector('.team-moto-txt');
const motoPara=document.querySelector('.team-moto-para');



window.addEventListener('scroll',()=>{

    popUpTheMoto();

})


function popUpTheMoto(){

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

}




// +++++++++++++++++++++++++++++++++++++++++++Search Box+++++++++++++++++++++++++++++++++++++++++++++


const depArr=[

    {
        dept:"bsccs",
        link:"departments@kgcas/science_CS.html",
        deptName:"B.Sc.CS",
    },



    {
        dept:"bca",
        link:"departments@kgcas/science_BCA.html",
        deptName:"BCA",
    },


    {
        dept:"bscmaths",
        link:"departments@kgcas/bsc-maths.html",
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
        link:"departments@kgcas/science_IT.html",
        deptName:"B.Sc.IT",
    },


    {
        dept:"bscct",
        link:"departments@kgcas/science_CT.html",
        deptName:"B.Sc.CT",
    },


    {
        dept:"baenglit",
        link:"departments@kgcas/maenglish.html",
        deptName:"B.A.Eng Lit",
    },


    {
        dept:"bba",
        link:"departments@kgcas/bba.html",
        deptName:"BBA",
    },

    {
        dept:"bbaca",
        link:"departments@kgcas/bba-ca.html",
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
        dept:"mcomib",
        link:"departments@kgcas/MCom_IB.html",
        deptName:"M.Com.IB",
    },

    {
        dept:"msccs",
        link:"departments@kgcas/msccs.html",
        deptName:"M.Sc.CS",
    },

    {
        dept:"mscss",
        link:"departments@kgcas/MscSS.html",
        deptName:"M.Sc.SS",
    },

    {
        dept:"ss",
        link:"departments@kgcas/MscSS.html",
        deptName:"M.Sc.SS",
    },

    {
        dept:"mscmaths",
        link:"departments@kgcas/msc-maths.html",
        deptName:"M.Sc.Maths",
    },

];



var emptArray=[];
var instanceOfEmptArray=[];

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


actualInput.addEventListener('input',()=>{


    searchedDeptUL.innerHTML=" ";
    emptArray=[];


         let typed=actualInput.value;
         typed=typed.toLowerCase();

        let modifiedInput=makeStringShort(typed);

    emptArray= findTheDepartment(modifiedInput);

    if(emptArray.length!=0){
        displaySearchedDept(emptArray);
    }

    instanceOfEmptArray=emptArray;

    emptArray=[];

})




goBtn.addEventListener('click',()=>{

    modifiedInput=actualInput.value;
    printerrormsg(modifiedInput);

})



function makeStringShort(intputStr){

    let arr=Array.from(intputStr);
    arr= arr.filter((e)=>(e!=" " && e!="."));
    arr=arr.join("");
    return arr;
}





function findTheDepartment(modifiedInput){


    if(modifiedInput.length!=0){

        let itHave=true;
        for(let i=0;i<depArr.length;i++){
            for(let j=0;j<modifiedInput.length;j++){

                if(modifiedInput[j]!=depArr[i]["dept"][j]){
                    itHave=false;
                    break;
                }

            }

            if(itHave===true){
                emptArray.push(depArr[i]);
            }else{
                itHave=true;
            }

        }

    }



    if(emptArray.length===0){


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
        }else if(modifiedInput==="ca"){
            for(let i=0;i<depArr.length;i++){
                if(depArr[i]["dept"][depArr[i]["dept"].length-1]==='a' && depArr[i]["dept"][depArr[i]["dept"].length-2]==='c'){
                    emptArray.push(depArr[i]);
                }
            }
        }else if(modifiedInput==="it" || modifiedInput==="informationtechnology"){
            for(let i=0;i<depArr.length;i++){
                if(depArr[i]["dept"]==="bcomit" || depArr[i]["dept"]==="bscit"){
                    emptArray.push(depArr[i]);
                }
            }
        }else if(modifiedInput==="computerscience" || modifiedInput==="cs"){
            for(let i=0;i<depArr.length;i++){
                if(depArr[i]["dept"]==="bsccs" || depArr[i]["dept"]==="msccs"){
                    emptArray.push(depArr[i]);
                }
            }
        }else if(modifiedInput==="computerapplications" || modifiedInput==="computerapplication"){
            for(let i=0;i<depArr.length;i++){
                if(depArr[i]["dept"]==="bca"){
                    emptArray.push(depArr[i]);
                }
            }
        }
    }

    return emptArray;

}





function displaySearchedDept(searchedArrofDept){

    for(let i=0;i<searchedArrofDept.length;i++){

        let liOfDept=document.createElement('li');
        let pOfDept=document.createElement('p');
        let arrowOfDept=document.createElement('h3');

        let actualArrow=document.createElement('i');

        liOfDept.style.cursor="pointer";
        
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


function printerrormsg(userWronglyTypedText){

    if(searchedDeptUL.children.length===0){
        let sorryText=document.createElement('p');
        sorryText.classList.add('sryTxtCont');
        if(userWronglyTypedText.length===0){
            sorryText.innerHTML="SERIOUSLY! you got to type something before pressing that beautiful GO button";
        }else{
            sorryText.innerHTML="OOPS! Seems like you misspelled the department name.";
        }

        sorryText.style.textAlign="center";
        searchedDeptUL.appendChild(sorryText);
    }else if(searchedDeptUL.children.length===1){
        window.location.href = `${instanceOfEmptArray[0]["link"]}`;
    }
}





closingCross.addEventListener('click',()=>{

    closingCross.classList.add('animation-for-closeBtn');

    searchBoxCont.style.top="-120%";

    searchedDeptUL.innerHTML=" ";
    actualInput.value="";
})




// +++++++++++++++++++++++++++++++++++++SEARCH MSG POPUP++++++++++++++++++++++++++++++++++++++++++++++++++

const searchIconId=document.querySelector('#search-ICON');
const searchMsg=document.querySelector('.searchMsg');
const scrollUpBtnId=document.querySelector('#scrollupBtnCont');
const scrollupButton=document.querySelector('#scroll-up-Btn');



searchIconId.addEventListener('mouseover',()=>{
    searchMsg.style.clipPath= "polygon(0 0,100% 0,100% 100%,0 100%)";
})
searchIconId.addEventListener('mouseout',()=>{
    searchMsg.style.clipPath= "polygon(0 0,0% 0,0% 100%,0 100%)";
})


let countPopUp=0;
function autoPopUpMsg(){
    setTimeout(()=>{
        searchMsg.style.clipPath= "polygon(0 0,100% 0,100% 100%,0 100%)";
        searchMsg.classList.add('vibrateMsg');
        countPopUp++;
    },4000)

    setTimeout(()=>{
        searchMsg.style.clipPath= "polygon(0 0,0% 0,0% 100%,0 100%)";
        searchMsg.classList.remove('vibrateMsg');
    },7000)

    setTimeout(()=>{
        if(countPopUp===2){
            return;
        }
        autoPopUpMsg();
    },10000);
}


autoPopUpMsg();


const teamCont=document.querySelector('.sec-4');


window.addEventListener('scroll',()=>{

    let currentPosOfSec=teamCont.getBoundingClientRect().top;

    if((currentPosOfSec)<(heightofPage-18)){
        searchIconId.classList.add('changePropOf');
        scrollUpBtnId.classList.add('changePropOf');
        scrollupButton.style.color="#222831";
    }else{
        searchIconId.classList.remove('changePropOf');
        scrollUpBtnId.classList.remove('changePropOf');
        scrollupButton.style.color="#f4f4f4";
    }
})
