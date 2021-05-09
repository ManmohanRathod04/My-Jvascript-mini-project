const button=document.querySelector("#btn");
const text=document.querySelector("#para");

var jokes=[
    "How does the moon cut his hair? Eclipse it.",
    " 'Dad, did you get a haircut?' 'No, I got them all cut!' ",
    "My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right!",
    "Why don't eggs tell jokes? They'd crack each other up.",
    "Why didn't the skeleton climb the mountain? It didn't have the guts.",
    "You think swimming with sharks is expensive? Swimming with sharks cost me an arm and a leg."
];

const Quotes=()=>{
    const Index=parseInt(Math.random()*jokes.length)
    para.innerHTML=jokes[Index];
}
button.addEventListener('click',Quotes);

