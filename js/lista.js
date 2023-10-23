let input = document.getElementById("inputNota");
var listaNotas = [];
let divLista = document.getElementById("divLista");

function addList(){
    let nota = input.value;
    listaNotas.push(nota);
    displayNotas();
}

function displayNotas() {
    let paragrafoNovo;
    divLista.innerHTML = "";

    for (let index = 0; index< listaNotas.length; index++) {
        paragrafoNovo = document.createElement("p");
        paragrafoNovo.innerHTML=listaNotas[index];

        if(index%2==0) {
            paragrafoNovo.style.backgroundColor = "rgb(255,0,0)"
        } else {
            paragrafoNovo.style.backgroundColor = "rgb(0,0,0)"
            paragrafoNovo.style.color = "rgb(255,255,255)"
        }

        divLista.append(paragrafoNovo);
    }
}