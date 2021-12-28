// start loud page
let loud = document.querySelector(".loud");

window.onload = function() {

    setTimeout(function(){

        loud.style.display = "none";
        document.body.style.overflow = "visible";
    },3000)
}

// end loud page

// start azkar
    let masbaha = document.querySelectorAll(".azkar-mouslem>.contener .zekr");
    
    masbaha.forEach(function(e){

        e.children[0].children[2].onclick = function(){

            e.children[0].children[1].textContent++;

         
        };

        e.children[0].children[3].onclick = function(){

            e.children[0].children[1].textContent = 0;
        }
    })

    // end azkar

    // start up bottom
    let up = document.querySelector(".up");
    let header = document.querySelector("header");
       window.onscroll = function(){

    if(window.scrollY >= 280){

        up.style.visibility = "visible";
        header.style.cssText = " position: fixed;";

    }
    else{
        up.style.visibility = "hidden";
        header.style.cssText = " position: static;";
    }
}

 // end up bottom

// start aside 


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

// end aside