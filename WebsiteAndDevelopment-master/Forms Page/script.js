window.onload = choosePic;

var myPix = ["Mesh Gradient Generator.png", "Mesh Gradient Generator (1).png", "Mesh Gradient Generator (2).png", "Mesh Gradient Generator (3).png"];

var chosenImage = ""; // Variable to store the chosen image URL

function choosePic() {
    // Choose a random image only once
    var randomNum = Math.floor(Math.random() * myPix.length);
    chosenImage = myPix[randomNum];

    // Apply the chosen image to all elements with class 'gradient'
    var backgrounds = document.querySelectorAll('.gradient');
    backgrounds.forEach(function(background) {
        var imageUrl = "url('" + chosenImage + "')";
        background.style.backgroundImage = imageUrl;
    });
}





// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}






const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split("").map(
(char, i) =>
`<span style="transform:rotate(${i*14}deg)">${char}</span>`
).join("")





// --- BUTTON
const $ = (s, o = document) => o.querySelector(s);
const $$ = (s, o = document) => o.querySelectorAll(s);

$$('.button').forEach(el => el.addEventListener('mousemove', function(e) {
  const pos = this.getBoundingClientRect();
  const mx = e.clientX - pos.left - pos.width/2; 
  const my = e.clientY - pos.top - pos.height/2;
   
  this.style.transform = 'translate('+ mx * 0.15 +'px, '+ my * 0.3 +'px)';
  this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.3 +', 0, 12deg)';
  this.children[0].style.transform = 'translate('+ mx * 0.025 +'px, '+ my * 0.075 +'px)';
}));

$$('.button').forEach(el => el.addEventListener('mouseleave', function() {
  this.style.transform = 'translate3d(0px, 0px, 0px)';
  this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
  this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
}));

// --- CURSOR
document.addEventListener('mousemove', function(e) {
  $('.cursor').style.left = (e.pageX - 25) + 'px';
  $('.cursor').style.top = (e.pageY - 25) + 'px';
});