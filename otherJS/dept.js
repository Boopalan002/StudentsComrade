
const allSemNotes=document.querySelector('#notes');

var arrayOfSem=allSemNotes.children[0].children[1].children[1].children[0].children;


for(let i=1;i<arrayOfSem.length;i++){

    let temp=arrayOfSem[i].children[2].children[0].children[1].children;


    for(let j=0;j<temp.length;j++){
        temp[j].children[2].addEventListener('click',()=>{
            alert(`Note: Click " View in drive " option in next page to access PPT files.`);
        });

    }

}


