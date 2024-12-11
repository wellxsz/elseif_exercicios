let valorMaterial = 60;

if (valorMaterial > 50) {
    valorMaterial -= valorMaterial * 0.1;
    console.log("Valor com desconto: R$", valorMaterial);
} else {
    console.log("Sem desconto, valor: R$", valorMaterial);
}
