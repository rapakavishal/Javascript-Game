var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}


var GameOver = setInterval(function(){
 var characterTopPosition = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
 var blockLeftPosition = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
 if(blockLeftPosition<20 && blockLeftPosition>0 && characterTopPosition>=130 ){
    block.style.animation = "none";
    alert("your score"+counter);
 }else
 {
	 counter = counter +0.01;
 }
 
},10);