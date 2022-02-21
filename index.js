var randomnumber1=Math.floor(Math.random()*6)+1;
var randomdiceimage="dice"+randomnumber1+".png";
var randomsource="images/"+randomdiceimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomsource);
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdiceimage2="dice"+randomnumber2+".png";
var randomsource2="images/"+randomdiceimage2;
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomsource2);
if(randomnumber1>randomnumber2)
{
  document.querySelector("h1").innerHTML="🚩Player 1 wins!"
}
else if(randomnumber1<randomnumber2)
{
  document.querySelector("h1").innerHTML="🚩Player 2 wins!"

}
else{
  document.querySelector("h1").innerHTML="Draw!"

}
