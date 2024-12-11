let valorEmprestimo = 1000, parcelas = 12;
let taxaJuros = 0.05; // 5%

let valorTotal = valorEmprestimo * Math.pow(1 + taxaJuros, parcelas);
console.log("Valor total do empréstimo: R$", valorTotal);
