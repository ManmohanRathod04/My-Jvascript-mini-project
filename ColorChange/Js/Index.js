  const maindiv=document.querySelector("#main");
const button=document.querySelector("#btn");
const colors=['green','Burgundy','yellow','purple','crimson'];

main.style.backgroundColor="red";

function changeC(){
    const colorIndex=parseInt(Math.random()*colors.length)
    main.style.backgroundColor=colors[colorIndex]
}
btn.addEventListener('click',changeC)