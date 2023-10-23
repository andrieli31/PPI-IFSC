let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
 let resultado = document.getElementById("resultado");



 function somar(){
  let soma = Number(input1.value) + Number(input2.value);
    resultado.innerHTML = soma;
}