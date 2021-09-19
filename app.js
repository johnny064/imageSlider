// initialization

var images = document.querySelectorAll("img");

console.log(images);
var prevBtn = document.querySelector("#prev");
var nextBtn = document.querySelector("#next");
var sliders = document.querySelectorAll(".sliders")
console.log(sliders);

var index = 0;
console.log(index);

for(let i=0;i<images.length;i++){
    sliders[i].style.display = "none";
    if(i==1){
    sliders[i].style.display = "block";
    }
}



prevBtn.addEventListener("click", function(){
    console.log(index);
    if(index ==0){
        sliders[0].style.display = "block";    
        sliders[1].style.display = "none";
        sliders[2].style.display = "none";
        
    }
    if(index == 1){
        sliders[2].style.display = "block";
        sliders[1].style.display = "none";
        sliders[0].style.display = "none";

    }
    if(index == 2){
        sliders[1].style.display = "block";
        sliders[0].style.display = "none";
        sliders[2].style.display = "none";
    }
    
    
    index = index+1;
    if(index>=3){
        index = 0;
    }
    
    
    




});

nextBtn.addEventListener("click", function(){
    
    console.log(index);
    if(index ==0){
        sliders[index+2].style.display = "block";
        sliders[index].style.display = "none";
        sliders[index+1].style.display = "none";
        
    }
    if(index == 1){
        sliders[index-1].style.display = "block";
        sliders[1].style.display = "none";
        sliders[2].style.display = "none";

    }
    if(index == 2){
        sliders[1].style.display = "block";
        sliders[0].style.display = "none";
        sliders[2].style.display = "none";
    }
    
    
    index = index+1;
    if(index>=3){
        index = 0;
    }
  
   



});

