let qualidade = 8, preco = 50;

if (qualidade >= 8 && preco <= 50) {
    console.log("Ótimo Custo-Benefício");
} else if (qualidade >= 6 && preco <= 70) {
    console.log("Bom");
} else if (qualidade >= 4 && preco <= 100) {
    console.log("Regular");
} else {
    console.log("Ruim");
}
