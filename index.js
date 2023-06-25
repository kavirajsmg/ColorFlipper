const but=document.querySelector(".refresh")
const bed=document.querySelector(".change");
const tub=document.querySelector("body");
const arr=["Blue","Green","Red","Orange","Violet","Indigo","Yellow"];
bed.addEventListener("click",function(){
    var num=Math.floor(Math.random()*arr.length);
    tub.style.backgroundColor=arr[num];
    but.textContent = arr[num];
})