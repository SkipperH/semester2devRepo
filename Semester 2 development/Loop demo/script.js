var body = document.getElementById("body-event");
var text = document.getElementById("main-text");
var span = document.getElementById("color-name");



// var colors = ["#202020", "#27D60F", "#0C7BDE", "#F324F3", "#F1360D", "#FF5733"];

// function RandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }

// let randomgetal = RandomInt(6);

// body.addEventListener("click", function(){
//     body.style.backgroundColor = colors[RandomInt(6)]
// })

setInterval(bugcreator, 1000);

function bugcreator(){
    
    const n = 1;
    
    for (let i = 1; i <= n; i++) {
        text.innerHTML += " I'm a bug >:)";
        
        if (i >= 3) {
            console.log("jeff")
        }
    }


    return n;
}


