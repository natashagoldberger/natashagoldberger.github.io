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



document.addEventListener('DOMContentLoaded',function(event){
  var dataText = [ "The brain lets us see.", "It lets us think.", "It lets us learn.", "It lets us experience.", "It lets us dream.", "It lets us live."];
  
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector("h4").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 150);
    }
    
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 1000);
    }
  }
  
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 1000);
     }
    
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }
 
  StartTextAnimation(0);
});