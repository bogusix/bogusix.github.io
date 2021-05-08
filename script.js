var slideElement = document.getElementById("slider");
var caseElement = document.getElementById("case");
slideElement.addEventListener("click", change);
var czy_trwa_zabawa=false;
var miod_na_uszy = new Audio('music.mp3');
var disco_time;

function change(){
    if(czy_trwa_zabawa==false){
        slideElement.style.backgroundImage="url('someguy.gif')";
        caseElement.style.boxShadow="inset 0 0 50px #518f00";
        caseElement.style.backgroundColor="white";
        slideElement.style.marginLeft="48%";
        disco();
        disco_time = setInterval(disco, 540);
        miod_na_uszy.play();
        czy_trwa_zabawa=true;
    }
    else{
        slideElement.style.backgroundImage="";
        clearInterval(disco_time);
        slideElement.style.marginLeft="2%";
        slideElement.style.backgroundColor="gray";
        caseElement.style.backgroundColor="black";
        caseElement.style.boxShadow="inset 0 0 20px gray"
        black();
        miod_na_uszy.pause();
        miod_na_uszy.load();
        czy_trwa_zabawa=false;
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
