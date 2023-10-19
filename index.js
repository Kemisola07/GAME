var id;
function start(){
    setInterval(id);
    document.getElementById('audio').play();
    document.getElementById("city1").style.animation='city1 8s infinite linear reverse';
    document.getElementById("city2").style.animation='city2 8s infinite linear reverse';
    document.getElementById("track1").style.animation='road1 1s infinite linear reverse';
    document.getElementById("track2").style.animation='road2 1s infinite linear reverse';
    document.getElementById("car-wheel-left").style.animation='wheel 0.1s infinite linear';
    document.getElementById("car-wheel-right").style.animation='wheel 0.1s infinite linear';
    document.getElementById("balu").style.animation='balu 10s infinite linear reverse';

    document.getElementById("car-wheel-left1").style.animation='wheel 0.1s infinite linear';
    document.getElementById("car-wheel-right1").style.animation='wheel 0.1s infinite linear';

    document.getAnimations("car-body").style.animation='car-body-animation 3s infinite ease-in-out'
   
    
    
    // audio.play();

    // id=setInterval(() => {
    //     document.getElementById("audio").play();
    // }, 800);
}

function stop(){
    document.getElementById("city1").style.animationPlayState='paused';
    document.getElementById("city2").style.animationPlayState='paused';
    document.getElementById("track1").style.animationPlayState='paused';
    document.getElementById("track2").style.animationPlayState='paused';
    document.getElementById("car-wheel-left").style.animationPlayState='paused';
    document.getElementById("car-wheel-right").style.animationPlayState='paused';

    document.getElementById("car-wheel-left1").style.animationPlayState='paused';
    document.getElementById("car-wheel-right1").style.animationPlayState='paused';

    clearInterval(id);
    document.getElementById('audio').pause();

}




function on(){
    setInterval(id);
    document.getElementById('audio').play();
   

    document.getAnimations("car-body1").style.animation='car-body-animation 3s infinite ease-in-out'
   
    
    
    // audio.play();

    // id=setInterval(() => {
    //     document.getElementById("audio").play();
    // }, 800);
}

function horn(){
    document.getElementById('audio1').play();
}

function hornoff(){
    document.getElementById('audio1').pause();
}