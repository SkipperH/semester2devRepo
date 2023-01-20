let vault = document.getElementById("open");
let scorekeeper = document.getElementById("score")
let score = 0;



document.addEventListener('keydown', (event) => {
    console.log(event.key);

    if (event.key == "f"){
        vault.style.display = "block";
    }
    else{
        score++
        scorekeeper.innerHTML = score + " Tries";
    }

    if (score == 3){
        scorekeeper.innerHTML = "Last try!";
    }

    if (score == 4){
        alert("Out of tries")
    }
});

    
