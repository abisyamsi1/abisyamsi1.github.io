AOS.init({
    duration:1000,
    once:true
});

new Typed(".typing",{
    strings:[
        "Abi Syamsi A",
        "Administrator",
        "Warehouse Staff",
        "Fast Learner"
    ],
    typeSpeed:80,
    backSpeed:50,
    backDelay:2000,
    loop:true
});

particlesJS("particles-js",{
    particles:{
        number:{value:70},
        color:{value:"#00e5ff"},
        shape:{type:"circle"},
        opacity:{value:0.4},
        size:{value:3},
        move:{
            enable:true,
            speed:2
        },
        line_linked:{
            enable:true,
            distance:150,
            color:"#00e5ff",
            opacity:0.3
        }
    }
});
