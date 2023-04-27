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
  // array with texts to type in typewriter
  var dataText = [ "The brain lets us see.", "It lets us think.", "It lets us learn.", "It lets us live."];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h4").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 150);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 1000);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 10000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});