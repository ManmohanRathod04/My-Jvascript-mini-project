let button=document.querySelector("#btn");
let input=document.getElementById("Input");
let display=document.getElementById("show");

let editor=document.getElementById("editor");
let button2=document.querySelector("#btn2");
let canEdit=document.getElementById("can-edit");

function AddText(){
    let para=document.createElement("div");
    para.setAttribute('id','para');

    let textPara=document.createElement("div");
    textPara.setAttribute('id',"textPara");

    para.appendChild(textPara);
    textPara.innerHTML=input.value;

    if(input.value!=""){
        display.appendChild(para);
    }
    else{
         alert("Enter some text");
    }

    input.value="";   //it remove the text from the input box
    textPara.addEventListener("click",()=> textPara.style.textDecoration="line-through");
    para.addEventListener("dblclick", ()=>para.remove());

}


button.addEventListener('click',AddText);














