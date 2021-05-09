const maindiv=document.querySelector("#main");
const button=document.querySelector("#btn");
const Hexcolor=document.querySelector("#HexColor");
const colors=['#E2F80C','#D5E466','#06F205','#F20766','#9A819C'];

main.style.backgroundColor="red";

function changeC(){
    const colorIndex=Math.floor(Math.random()*colors.length)
    main.style.backgroundColor=colors[colorIndex]
    Hexcolor.innerHTML="Hex Color : "+colors[colorIndex];
}
btn.addEventListener('click',changeC)
