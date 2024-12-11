let nota1 = 6, nota2 = 7, nota3 = 5;
if (nota1 < 4 || nota2 < 4 || nota3 < 4) {
    console.log("Reprovado");
} else {
    let media = (nota1 + nota2 + nota3) / 3;
    if (media >= 6) {
        console.log("Passou direto");
    } else {
        console.log("Ficou de recuperação");
    }
}
