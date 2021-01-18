/*<img id="myImg" src="coding-is-fun.jpg" alt="Coding is fun!" width="250" height="250">*/

function myDevelopers() {  
document.getElementById("myp1").textContent = "Developers for life!";
}

function myCoders() {
document.getElementById("myp2").textContent = "We are coders!";
}

    
function myImage() {
    var myImg = new Image();
    myImg.src = "coding-is-fun.jpg";
    document.getElementById("myp3").appendChild(myImg);
} 

function myColor() {
  document.getElementById("myp1").style.color = "purple";
 document.getElementById("myp2").style.color = "purple";
}

function mySize() {
    document.getElementById("myp1").style.fontSize = "x-large";
}

function myH() {
    document.getElementById("myp3").style.visibility = "hidden";
}
