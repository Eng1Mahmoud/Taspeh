
//start azkar
let masbaha = document.querySelectorAll(".azkarspahORmasa>.contener .zekr");
let finsh = document.querySelector(".azkarspahORmasa>.contener .finsh");

    
finsh.children[1].children[0].onclick = function(){

    window.location.reload();
   };

    masbaha.forEach(function(e){

      
        e.children[0].children[2].onclick = function(){
           
            e.children[0].children[1].textContent++;

            let gole = parseInt(e.children[1].children[1].dataset.gole);
            
              if( e.children[0].children[1].textContent >= gole ){
                  
                  e.style.cssText = "transform:scale(0)";
                  setTimeout(function(){

                    e.remove();
                  
                  
                  },300);
                 
              }

            if(e.parentElement.children.length == 2 && e.children[0].children[1].textContent >= gole  ){
              
               finsh.style.display = "block";
            }
         
        };

        e.children[0].children[3].onclick = function(){

            e.children[0].children[1].textContent = 0;
            Aud.play();
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

// end  up bottom

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








