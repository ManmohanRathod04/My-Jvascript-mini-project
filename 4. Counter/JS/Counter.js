const button = document.querySelector("#btn");
const button2 = document.querySelector("#btn2");
const button3 = document.querySelector("#btn3");
let print = document.getElementById("show");
let num = 0;

const counter = () => {
    num += 1;
    print.innerHTML = num;

    if (num >= 0) {
        print.style.color = "green";
    }
}

const counter2 = () => {
    num -= 1;
    print.innerHTML = num;

    if (num <= 0) {
        print.style.color = "red";
    }

}
const counter3 = () => {
    num = 0;
    print.innerHTML = num;
    print.style.color = "#fff";

    setTimeout(() => {
        print.style.color = "#eed706ab";
    }, 1000)
}

button.addEventListener('click', counter2);
button2.addEventListener('click', counter);
button3.addEventListener('click', counter3);



