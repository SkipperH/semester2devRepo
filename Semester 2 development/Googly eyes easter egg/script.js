
var portallogo = document.getElementById("portallogoicon");
var portalguyorange = document.getElementById("portalguyicon");
var portalopen = new Audio("sounds/portal_fire.mp3");



// portallogo.addEventListener("click", function(){
//     portalopen.play();
//     portalguyorange.style.display = "block";
// })


// document.addEventListener('mousemove', (e) =>{
//     console.log(e);

//     const mouseX = e.clientX;
//     const mouseY = e.clientY;


//     const anchor = document.getElementById('anchor')
//     const rekt = anchor.getBoundingClientRect();
//     const anchorX = rekt.left + rekt.width / 2;
//     const anchorY = rekt.top + rekt.height / 2;

//     const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    
//     console.log(angleDeg);

//     const eyes = document.querySelectorAll('.eye')
//     eyes.forEach(eye => {
//         eye.style.transform = `rotate(${90 + angleDeg}deg)`
//     })
// })

// function angle(cx, cy, ex, ey) {
//     const dy = ey - cy;
//     const dx = ex - cx;
//     const rad = Math.atan2(dy, dx);
//     const deg = rad * 180 / Math.PI;
//     return deg;
// }


// 2e versie!

// var balls = document.getElementsByClassName("pupil");

//     document.onmousemove = function(event){
//     var x = event.clientX * 100 / window.innerWidth + "%";
//     var y = event.clientY * 100 / window.innerHeight + "%";
    
//     for(var i=0; i<2; i++){
//         balls[i].style.left = x;
//         balls[i].style.top = y;
//     }

//     console.log(x);
// }

document.querySelector("body").addEventListener("mousemove", eyeball);

 function eyeball() {
   const eye = document.querySelectorAll(".eyes");
   eye.forEach(function (eye) {
     let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
     let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

     let radian = Math.atan2(event.pageX - x, event.pageY - y);
     let rotate = radian * (180 / Math.PI) * -1 + 270;
     eye.style.transform = "rotate(" + rotate + "deg)";
   });
 }

// var overlay = document.getElementsByClassName("clickme");
// var googleyes = document.getElementsByClassName("eyes");

// overlay.addEventListener("click", function(){
//     googleyes.style.display = "block";
// })





// var googleyes = document.getElementsByClassName("eyes");

// do {
//   googleyes[1].style.background = "blue";
//   console.log("hallo");
// }
// while (googleyes[1].style.transform.rotate >= "300deg");
