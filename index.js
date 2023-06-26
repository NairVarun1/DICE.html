var randomnumber1=Math.floor(Math.random()*6)+1;

var Randomdiceimage="dice"+ randomnumber1 +".png";
var Randomimagesource="images/" +Randomdiceimage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",Randomimagesource);

var randomnumber2=Math.floor(Math.random()*6)+1;
var Randomimagesource2="images/dice"+randomnumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",Randomimagesource2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS !!";
}else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS !!";
}else{
    document.querySelector("h1").innerHTML="IT'S A DRAW !!!";
}