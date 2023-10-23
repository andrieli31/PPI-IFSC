let numero = document.getElementById("numero");
let contagem = document.getElementById("contagem")

function contar(){
    let numeroInt = parseInt(numero.value);

        let resultado = "";
        for (let i = 1; i <= numeroInt; i++) {
            resultado += i + " ";
        }
        contagem.innerHTML = "Contagem: " + resultado;
  
}
