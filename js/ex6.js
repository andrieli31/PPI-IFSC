let a = document.getElementById("r");
let b = document.getElementById("g");
let c = document.getElementById("b");
let bodi = document.getElementById("boddy");

let result = document.getElementById("Troca Cor");

function color(){
    console.log("odsa");
    bodi.style.backgroundColor= `rgb(${a.value},${b.value},${c.value})`;
}