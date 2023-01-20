//elements
let function1 = document.getElementById("java1button");
let answer1 = document.getElementById("java1answer");
let function2 = document.getElementById("java2button");
let answer2 = document.getElementById("java2answer");
let function3 = document.getElementById("java3button");
let answer3 = document.getElementById("java3answer");

function calculator(p1, p2){
    return p1 + p2;
}

function message(){
    alert("Sup man");  
}

function messagecalc(g1, g2){
    alert(g1 + g2);
}

function1.addEventListener("click", function(){
    answer1.innerHTML = calculator(12, 12)
});

function2.addEventListener("click", function(){
    answer1.innerHTML = message()

});

function3.addEventListener("click", function(){
    answer1.innerHTML = messagecalc(12, 12);
});
















