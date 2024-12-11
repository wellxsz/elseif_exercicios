let media = 6, frequencia = 80;

if (media >= 6 && frequencia >= 75) {
    console.log("Passou");
} else if (media >= 4 && media < 6 && frequencia >= 75) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}
