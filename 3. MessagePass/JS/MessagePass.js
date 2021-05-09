let text=document.getElementById("EnterText");
let show=document.querySelector("#messageDelivered");
const button=document.querySelector("#btn");

// let a=0;
let a=0;
let isEmpty=false;
const messagePass=()=>{

    function remove(){
        show.innerHTML="";
        show.style.backgroundColor="#243b55";
    }
    if(text.value!==""){
        if(isEmpty==true){
            clearTimeout(a);
            isEmpty=false;
        }  
        show.innerHTML=text.value;
        show.style.backgroundColor="#243b55";
        text.value="";
    }
    else{
        isEmpty=true;
        show.innerHTML="Please enter some text 😈"
        show.style.backgroundColor="red";
        show.style.color="#fff";
        a=setTimeout(remove,6500);

    }
    // console.log(clearTimeout(a));
    console.log(a);


}

button.addEventListener('click',messagePass)



































// const button = document.querySelector("#btn");
// let text = document.querySelector("#EnterText");
// let showText = document.querySelector("#messageDelivered");

// let a;
// let isEmpty = false;

// const print = () => {

//     const remove = () => {
//         showText.innerHTML = "";
//     }

//     if (text.value != "") {

//         if (isEmpty == true) {
//             clearTimeout(a);
//             isEmpty = false;
//         }

//         showText.innerHTML = text.value;
//         showText.style.backgroundColor = "#243b55";
//         showText.style.color = "white";
//         text.value = "";
//     }

//     else {
//         // alert("Please provide some text");
//         isEmpty = true;
//         showText.innerHTML = "Please provide some text 🥺 ";
//         showText.style.color = "#fff";
//         showText.style.backgroundColor = "red";

//         a = setTimeout(remove, 2000);
//     }

// }
// button.addEventListener('click', print)























