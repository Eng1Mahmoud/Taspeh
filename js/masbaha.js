let masbaha = document.querySelector(".azkar-mouslem>.contener .zekr");
masbaha.children[0].children[2].onclick = function(){

    masbaha.children[0].children[1].textContent++;

 
};

masbaha.children[0].children[3].onclick = function(){

    masbaha.children[0].children[1].textContent = 0;
}

//aside 


let close = document.querySelector("aside .fa-times");
console.log(close.parentElement.parentElement);



close.onclick = function() {

 this.parentElement.parentElement.style.cssText =  " position:absolute; top:-120%; ";

};

let menue = document.querySelector("header .contener .fa-bars");

menue.onclick = function() {

    close.parentElement.parentElement.style.cssText  = " position:fixed; top:0%; ";

    setTimeout(() => {
        close.parentElement.parentElement.style.cssText =  " top:-30px;";
    }, 600);

    setTimeout(() => {
        close.parentElement.parentElement.style.cssText =  " top:0px;";
    }, 1000);
    
    
    
}


let header = document.querySelector("header");
window.onscroll = function(){

if(window.scrollY >= 150){


    header.style.cssText = " position: fixed;";
}
else{

    header.style.cssText = " position: static;";
}
}