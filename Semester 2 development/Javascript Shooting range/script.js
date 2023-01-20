//elements
let scoreThingy = document.getElementById("score");
let scoreThingySecond = document.getElementById("score2");
let tonyThingy = document.getElementById("tony1");
let tonyThingySecond = document.getElementById("tony2");
let soundEffect = new Audio("audio/hit.wav");
let timerThingy = document.getElementById("timer");

// document.onclick = function() {
//     soundEffect.play();
//   }

// function play() {
//     var audio = soundEffect;
//     if (audio.paused) {
//         audio.play();
//     }else{
//         audio.currentTime = 0
//     }
// }

//vars
let score = 0;
let time = 0;

tonyThingy.addEventListener("click", function() {
    
    var rando = Math.floor(Math.random() * 75);
    var randoWith = Math.floor(Math.random() * 40);
    

    tonyThingy.style.left = rando + "%";
    tonyThingy.style.top = rando + "%";
    tonyThingy.style.height = randoWith + "%";
    score ++
    soundEffect.play();
    scoreThingy.innerHTML = score + " Hits";
});

tonyThingySecond.addEventListener("click", function() {
    
    var rando = Math.floor(Math.random() * 75);
    var randoWith = Math.floor(Math.random() * 40);

    tonyThingySecond.style.left = rando + "%";
    tonyThingySecond.style.top = rando + "%";
    tonyThingySecond.style.height = randoWith + "%";
    score ++
    soundEffect.play();
    scoreThingySecond.innerHTML = score + " Hits";
});


setInterval(myTimer, 1000);

function myTimer() {
  document.getElementById("timer").innerHTML = "Your Time: " + time++;
}




