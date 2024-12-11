let prova1 = 6, prova2 = 7, prova3 = 8;
let media = (prova1 + prova2 + prova3) / 3;
let atividadesExtras = true;

if (atividadesExtras) {
    media *= 1.05; // bônus de 5%
}

if (media >= 6) {
    console.log("Passou");
} else if (media >= 4) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}
