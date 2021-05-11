const main = document.getElementById("container");
let textCounter = document.querySelector("#text2");
let imageCounter = document.getElementById("counter");
let image = document.querySelector("img");
var button = document.querySelector("#btn");
var button2 = document.querySelector("#btn2");

var images = [
  "https://images.unsplash.com/photo-1595761970908-aeeb4c79b086?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1598194550497-694db6d310fc?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1618465818399-5e760c5d54e5?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1619021897540-344c66b2222e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1607053075722-dff3fb966413?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  , "img/Groot.jpg",
  "img/hayabusha.jpg"
];

var border = [
  "3px solid peru",
  "3px solid violet",
  "3px solid indigo",
  "3px solid aquamarine",
  "3px solid green",
  "3px solid crimson",
  "3px solid #800020"
];

let i = 0;
var a;
image.src = images[i];
image.style.border = border[i];


function autoPlay(){
  sliderRight();
  setTimeout(autoPlay,3000);
}

const sliderRight = () => {
  i++;
  if (i == images.length) {
    i = 0;

  }
  
  image.src = images[i];
  image.style.border = border[i];
  textCounter.innerHTML = "Image : " + (i +1)  + "/7";


}

const sliderLeft = () => {
  i--;
  if (i==-1) {
    i = images.length-1;
  }
  image.src = images[i];
  image.style.border = border[i];
  textCounter.innerHTML = "Image : " + (i + 1) + "/7";

  

}

window.onload=autoPlay;

button.addEventListener('click', sliderLeft);
button2.addEventListener('click', sliderRight);







