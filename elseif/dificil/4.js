let disciplina = "Eletiva";
let vagasDisponiveis = 0;

if (disciplina === "Obrigatória") {
    console.log("Matricula confirmada");
} else if (disciplina === "Eletiva") {
    if (vagasDisponiveis > 0) {
        console.log("Matricula confirmada");
    } else {
        console.log("Sem vagas disponíveis, em espera");
    }
} else {
    console.log("Disciplina inválida");
}
