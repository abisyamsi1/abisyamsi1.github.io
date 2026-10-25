// Animasi muncul saat scroll

const elements = document.querySelectorAll(
    "section, .skill, .profile img, .hero-text"
);

window.addEventListener("scroll", () => {

    elements.forEach((element) => {

        const position = element.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if(position < screenHeight - 100){

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

});


// Efek awal animasi

elements.forEach((element)=>{

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "0.8s";

});
