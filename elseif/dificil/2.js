let temCartao = true, cartaoAtivo = false;

if (temCartao) {
    if (cartaoAtivo) {
        console.log("Acesso permitido");
    } else {
        console.log("Acesso negado: Cartão inativo");
    }
} else {
    console.log("Acesso negado: Sem cartão");
}
