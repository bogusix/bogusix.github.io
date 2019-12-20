window.onload = function() {
  if(window.innerWidth<=1250){
        document.getElementById("myNav").style.display="none";
        document.getElementById("myNav2").style.display="block";
        document.getElementById("menu_icon").style.display="block";

    }
    else{
        document.getElementById("myNav").style.display="block";
        document.getElementById("myNav2").style.display="none";
        document.getElementById("menu_icon").style.display="none";
        document.getElementById("myNav2").style.top="-351px";   
    }
};
    


window.addEventListener('resize', responisiveMenu);
document.getElementById("menu_icon").addEventListener("click", menuSlide);
var menubool=false;

setInterval(backgroundChange, 5000);

var bg=new Array("url(imgs/1bg.png)", "url(imgs/2bg.png)", "url(imgs/3bg.png)", "url(imgs/4bg.png)");
var bg_nr=1;


function backgroundChange(){
    document.getElementById("banner").style.backgroundImage=bg[bg_nr];
    bg_nr++;
    if(bg_nr==3){
        bg_nr=0;
    }
}

function responisiveMenu(){
    var winwidth=window.innerWidth;
    if(winwidth<=1250){
        document.getElementById("myNav").style.display="none";
        document.getElementById("myNav2").style.display="block";
        document.getElementById("menu_icon").style.display="block";
        
    }
    else{
        document.getElementById("myNav").style.display="block";
        document.getElementById("myNav2").style.display="none";
        document.getElementById("menu_icon").style.display="none";
        document.getElementById("myNav2").style.top="-351px";
        document.getElementById("menu_icon").style.transform = "rotate(0deg)";  
    }
    
}

function menuSlide(){
    if(menubool==false){
        document.getElementById("myNav2").style.top="0px";   
        document.getElementById("menu_icon").style.transform ="rotate(270deg)";  
        menubool=true;
    }
    else{
        document.getElementById("myNav2").style.top="-351px";
        document.getElementById("menu_icon").style.transform = "rotate(0deg)";  
        menubool=false;
    }
}