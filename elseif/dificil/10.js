let consumo = 150;
let valor;

if (consumo <= 100) {
    valor = consumo * 0.5;
} else if (consumo <= 200) {
    valor = consumo * 0.7;
} else {
    valor = consumo * 0.9;
}

console.log("Valor da conta de energia: R$", valor);
