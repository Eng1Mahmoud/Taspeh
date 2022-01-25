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
let up = document.querySelector(".up");
window.onscroll = function(){

if(window.scrollY >= 150){


    header.style.cssText = " position: fixed;";
    up.style.visibility = "visible";
}
else{

    header.style.cssText = " position: static;";
    up.style.visibility = "hidden";
};
}


// add 

let add = document.querySelector(".azkar-mouslem>.contener .zekr .add .content");

let qdescription = document.querySelector(".azkar-mouslem>.contener .zekr .discr q");
let error = document.querySelector(".azkar-mouslem>.contener .zekr .add .error");
console.log(add.children[0]);

add.children[0].onclick = function(e){
    console.log(add.children[1].value.length);
    lengths = add.children[1].value.trim().length;
   

  if(lengths > 0){

    qdescription.textContent =   add.children[1].value;

    error.style.cssText = "visibility : hidden";
   
  }
  else if(lengths >= 50){
   error.style.cssText = "visibility : visible";
   error.textContent =  "لقد تعديت عددالاحرف المسموح بها"


  }
  else if(lengths == 0){

    error.style.cssText = "visibility : visible";
    error.textContent =  " لم تقم باضافة ذكر";
 
  }

  
  
};


let str = "           ";

console.log(str.length);
console.log(str.trim().length);

