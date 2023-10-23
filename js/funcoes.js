function calcular() {
    let number = parseInt(document.getElementById("number").value);
    let resultado = document.getElementById("resultado");

    if (!isNaN(number)) {
        let fatorial = calcularFatorial(number);
        let fibonacci = calcularFibonacci(number);

        resultado.style.display = "block";
        document.getElementById("fatorial").textContent = `Fatorial de ${number}: ${fatorial}`;
        document.getElementById("fibonacci").textContent = `Sequência de Fibonacci: ${number}: ${fibonacci.join(', ')}`;
    } else {
        resultado.style.display = "none";
        alert("Por favor, insira um número válido.");
    }
}

function calcularFatorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * calcularFatorial(n - 1);
    }
}

function calcularFibonacci(n) {
    let fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
}