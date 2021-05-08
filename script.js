var slideElement = document.getElementById("slider");
var caseElement = document.getElementById("case");
slideElement.addEventListener("click", change);
var isON=false;
var music = new Audio('music.mp3');
var disco_time;

function change(){
    if(isON==false){
        slideElement.style.backgroundImage="url('niceguy.jpg')";
        caseElement.style.boxShadow="inset 0 0 50px #518f00";
        caseElement.style.backgroundColor="white";
        slideElement.style.marginLeft="48%";
        disco();
        disco_time = setInterval(disco, 540);
        music.play();
        isON=true;
    }
    else{
        slideElement.style.backgroundImage="";
        clearInterval(disco_time);
        slideElement.style.marginLeft="2%";
        slideElement.style.backgroundColor="gray";
        caseElement.style.backgroundColor="black";
        caseElement.style.boxShadow="inset 0 0 20px gray"
        black();
        music.pause();
        music.load();
        isON=false;
    }
}

function disco(){
    for(var i=1; i<=8; i++){
        var s_id="s"+i;
        var r=Math.round(Math.random()*255);
        var g=Math.round(Math.random()*255);
        var b=Math.round(Math.random()*255);
        document.getElementById(s_id).style.backgroundColor="rgb("+r+","+g+","+b+")";
    }
}

function black(){
    for(var i=1; i<=8; i++){
        var s_id="s"+i;
        document.getElementById(s_id).style.backgroundColor="rgb(0,0,0)";
    }
}
