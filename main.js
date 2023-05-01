var maining=document.querySelector("img");
var images =[ "https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2022/NTAWeclomePage/XCM_Manual_1437710_4757741_1500x250_2X.jpg","https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumables/XCM_Manual_1566918_5550460_1500x200_2X.jpg","https://m.media-amazon.com/images/G/42/prime/marketing/slashPrime/Prime_Deals_Illustration_2x._CB621712384_.jpg","https://m.media-amazon.com/images/G/42/prime/marketing/slashPrime/Prime_Video_Illustration_2x._CB621713227_.jpg","https://m.media-amazon.com/images/G/42/prime/marketing/slashPrime/Prime_Video_Illustration_2x._CB621713227_.jpg" ];
var num =0;

function next(){
    num++;
    if(num>=images.length){
        num=0;
        maining.src=images[num]
    }
    else{
        maining.src=images[num]
    }

};
function back(){
    num--;
    if(num<0){
      
        num=images.length-1; 
        maining.src=images[num]    
 }
    else{
        maining.src=images[num]
    }

};

var ben = document.querySelector(".ben");
var benn = document.querySelector(".benn");
var cono=document.querySelector(".cono");
var conoo =document.querySelector(".conoo");

benn.addEventListener("click",function(){
cono.classList.add("active");
conoo.classList.add("active");
});



var hen =document.querySelector("h3");
var all=document.querySelector(".all");

hen.onclick = function () {
if(all.style.display == "block"){
  all.style.display = "none";  
} 
else(
    all.style.display = "block"
)};


