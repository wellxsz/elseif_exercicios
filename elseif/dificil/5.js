let prova1 = 7, prova2 = 6, prova3 = 8;
let media = (prova1 + prova2 + prova3) / 3;

if (media >= 8) {
    console.log("Passou com destaque");
} else if (media >= 6) {
    console.log("Passou");
} else if (media >= 4) {
    console.log("Ficou de recuperação");
} else {
    console.log("Reprovado");
}
