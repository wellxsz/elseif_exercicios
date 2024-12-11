let infrações = [5, 3, 2]; // Pontos por infrações
let pontos = infrações.reduce((total, pontos) => total + pontos, 0);

if (pontos >= 20) {
    console.log("Suspensão da carteira");
} else {
    console.log("Você pode acumular mais", 20 - pontos, "pontos antes da suspensão");
}
