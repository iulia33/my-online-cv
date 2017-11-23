window.addEventListener("load",function(){
let index = 0;
slideShowCarousel();

function slideShowCarousel(){
    let myImg = document.getElementsByClassName("my-img");
    
    for (var i = 0; i < myImg.length; i++){
        myImg[i].style.display = "none";
    }
    
    index++;
    
    if(index>myImg.length){ index =1}
    
    myImg[index-1].style.display = "block";
    setTimeout(slideShowCarousel,2000);
}

});