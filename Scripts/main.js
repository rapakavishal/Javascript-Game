var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
var jump = ()=> {
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(()=>{ character.classList.remove("animate");}, 500);
}


var GameOver = setInterval(()=>{
 var characterTopPosition = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
 var blockLeftPosition = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
 if(blockLeftPosition<150 && blockLeftPosition>0 && characterTopPosition>=250 ){
    block.style.animation = "none";
    alert("You were able to dodge deeer "+Math.floor(counter)+" times");
 }else
 {
	 counter = counter +0.01;
 }
},10);



