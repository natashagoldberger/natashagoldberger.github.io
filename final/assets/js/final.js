//fade out landing
const landingBrain = document.querySelector('#landing-brain');
const landingContainer = document.querySelector('#landing-container');

landingBrain.addEventListener('click', () => {
  landingContainer.style.opacity = 0;
  landingContainer.style.transition = 'opacity 1s';
  setTimeout(() => {
    landingContainer.style.display = 'none';
  }, 1000);
});


//COLORING 
function color(element) {
    document.getElementById(element).classList.remove("hidden");
    document.getElementById(element+"-description").style.display = "block";
    document.getElementById("parts-title").style.display = "none";
}

function hide(element) {
    document.getElementById(element).classList.add("hidden");
    document.getElementById(element+"-description").style.display = "none";
    document.getElementById("parts-title").style.display = "block";
}

function colorFrontal() {
	color('frontal');
}

function colorTemporal() {
	color('temporal');
}

function colorParietal() {
	color('parietal');
}

function colorOccipital() {
	color('occipital');
}

function colorCerebellum () {
	color('cerebellum');
}

document.getElementById("button1").onmouseover = colorFrontal;
document.getElementById("button2").onmouseover = colorTemporal;
document.getElementById("button3").onmouseover = colorParietal;
document.getElementById("button4").onmouseover = colorOccipital;
document.getElementById("button5").onmouseover = colorCerebellum;

function hideFrontal() {
	hide('frontal');
}

function hideTemporal() {
	hide('temporal');
}

function hideParietal() {
	hide('parietal');
}

function hideOccipital() {
	hide('occipital');
}

function hideCerebellum() {
	hide('cerebellum');
}

document.getElementById("button1").onmouseout = hideFrontal;
document.getElementById("button2").onmouseout = hideTemporal;
document.getElementById("button3").onmouseout = hideParietal;
document.getElementById("button4").onmouseout = hideOccipital;
document.getElementById("button5").onmouseout = hideCerebellum;

