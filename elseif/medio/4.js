let matriculado = true;
let valorCurso = 500;

if (matriculado) {
    valorCurso -= valorCurso * 0.2;
    console.log("Valor com desconto: R$", valorCurso);
} else {
    console.log("Sem desconto, valor: R$", valorCurso);
}
