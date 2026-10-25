// Animasi scroll muncul

const elements = document.querySelectorAll(
".hero-text, .profile-box, section, .skills div, .card"
);


window.addEventListener("scroll",()=>{

elements.forEach((el)=>{

const posisi = el.getBoundingClientRect().top;

const tinggi = window.innerHeight;


if(posisi < tinggi - 100){

el.style.opacity="1";

el.style.transform="translateY(0)";

}

});

});


// posisi awal

elements.forEach((el)=>{

el.style.opacity="0";

el.style.transform="translateY(50px)";

el.style.transition="0.8s ease";

});



// Efek gerak 3D foto profil

const profile =
document.querySelector(".profile-box");


document.addEventListener("mousemove",(e)=>{


if(profile){

let x =
(e.clientX/window.innerWidth-.5)*15;


let y =
(e.clientY/window.innerHeight-.5)*15;


profile.style.transform =
`rotateY(${x}deg) rotateX(${-y}deg)`;

}


});
