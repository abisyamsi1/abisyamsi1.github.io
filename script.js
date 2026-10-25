// Efek mengetik

const text = "Fresh Talent | Siap Berkembang | Engineer Mindset";

let index = 0;

function typing(){

    if(index < text.length){

        document.querySelector(".hero-text h3").innerHTML += text.charAt(index);

        index++;

        setTimeout(typing,80);

    }

}

document.querySelector(".hero-text h3").innerHTML = "";

typing();



// Animasi saat scroll

const items = document.querySelectorAll(
"section, .skill, .profile img"
);


window.addEventListener("scroll",()=>{


items.forEach(item=>{


let posisi =
item.getBoundingClientRect().top;


let tinggi =
window.innerHeight;


if(posisi < tinggi - 100){

item.style.opacity="1";

item.style.transform="translateY(0)";


}


});


});



// Posisi awal animasi

items.forEach(item=>{


item.style.opacity="0";

item.style.transform=
"translateY(50px)";


item.style.transition=
"all .8s ease";


});



// Efek parallax foto profil

document.addEventListener("mousemove",(e)=>{


const img =
document.querySelector(".profile img");


let x =
(e.clientX / window.innerWidth - .5) * 20;


let y =
(e.clientY / window.innerHeight - .5) * 20;


img.style.transform =
`translate(${x}px,${y}px)`;


});
