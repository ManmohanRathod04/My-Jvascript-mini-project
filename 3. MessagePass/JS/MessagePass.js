
const button = document.querySelector("#btn");
let text = document.querySelector("#EnterText");
let showText = document.querySelector("#messageDelivered");

let a;
let isEmpty = false;

const print = () => {

    const remove = () => {
        showText.innerHTML = "";
    }

    if (text.value != "") {

        if (isEmpty == true) {
            clearTimeout(a);
            isEmpty = false;
        }

        showText.innerHTML = text.value;
        showText.style.backgroundColor = "#243b55";
        showText.style.color = "white";
        text.value = "";
    }

    else {
        // alert("Please provide some text");
        isEmpty = true;
        showText.innerHTML = "Please provide some text 🥺 ";
        showText.style.color = "#fff";
        showText.style.backgroundColor = "red";

        a = setTimeout(remove, 2000);
    }

}
button.addEventListener('click', print)























