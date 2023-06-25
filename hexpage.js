const but=document.querySelector(".refresh")
const bed=document.querySelector(".change");
const tub=document.querySelector("body");
const arr=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
bed.addEventListener("click",function(){
    let kettle='';
    for(let i=0;i<6;i++){
        var num = Math.floor(Math.random()*arr.length);
        kettle += arr[num];
    }
    tub.style.backgroundColor="#"+kettle;
    but.textContent ="#"+kettle;
})