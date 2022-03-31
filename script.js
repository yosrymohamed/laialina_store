let upButton = document.querySelector(".upButton");







window.onscroll = function (){
    if(scrollY >= 314){
        upButton.style.display = "block";
    }else{
        upButton.style.display = "none";
    }
}

upButton.onclick = function (){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}