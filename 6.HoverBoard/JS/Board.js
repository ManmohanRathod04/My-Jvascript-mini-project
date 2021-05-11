const box=document.getElementById('box');
const msg=document.getElementById('msg');


var colors=["red","blue","yellow","#800020","peru","crimson"];

for(var i=0;i<500;i++){
    const div=document.createElement('div');
    div.classList.add('square');
    div.addEventListener('mouseover',()=> setColor(div));
    div.addEventListener('mouseout',()=> removeColor(div));
    setInterval('setColor(msg)',2000);
    box.appendChild(div);
}

function setColor(element){
    var color=colors[Math.round(Math.random()*colors.length)];
    element.style.background=`${color}`;
    element.style.boxShadow=`0px 0px 2px ${color},0px 0px 7px ${color}`;
}

function removeColor(element){
    element.style.background="#1d1d1d";
    element.style.boxShadow=`0px 0px 2px #000`;
}

function getRandom(){
    return colors[Math.round(Math.random()*colors.length)];
}








