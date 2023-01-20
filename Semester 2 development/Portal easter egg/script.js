
var portallogo = document.getElementById("portallogoicon");
var portalguyorange = document.getElementById("portalguyicon");
var portalopen = new Audio("sounds/portal_fire.mp3");
var portalorange = document.getElementById("portalanimated");
var slices = new Audio ("sounds/That’s enough slices  (128 kbit s) (via Skyload).audio.mp3")
let clickCount = 0;
let portaltoggle = true;


var konamiCode = [];


document.addEventListener('keydown', function(e) {
  
  konamiCode.push(e.keyCode);

 
  if (konamiCode.toString() == [38, 38, 40, 40, 37, 39, 37, 39, 66, 65].toString()) {
    var element = document.getElementById('portallogoicon');
element.style.opacity = "1";
  }
});


portallogo.addEventListener("click", function(){
    
    if (portaltoggle == true){
      portalopen.play();
      portaltoggle = false
    }
    

    portalguyorange.style.display = "block";
    portalorange.style.display = "block";
    
})


portallogo.addEventListener("click", function() {
  clickCount++;

  if (clickCount === 10) {
    slices.play();
  }
});

