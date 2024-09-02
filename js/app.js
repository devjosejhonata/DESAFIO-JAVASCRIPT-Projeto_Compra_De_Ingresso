
// Função para ser chamada quando o botão "Comprar" for clicado
function comprar() {
    // Obtendo o valor selecionado do tipo de ingresso e a quantidade informada
    const tipoIngresso = document.getElementById('tipo-ingresso').value;
    const qtd = parseInt(document.getElementById('qtd').value, 10);

    // Verifica se o tipo de ingresso não foi selecionado (valor é vazio)
    if (tipoIngresso === "") {
        alert('Por favor, selecione um tipo de ingresso.');
        return;
    }

    // Verifica se a quantidade é um número válido e maior que 0
    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, informe uma quantidade válida.');
        return;
    }

    // Obtendo o elemento que contém a quantidade disponível para o tipo selecionado
    const qtdDisponivelElement = document.getElementById(`qtd-${tipoIngresso}`);

    // Obtendo a quantidade disponível atual e convertendo para número
    let qtdDisponivel = parseInt(qtdDisponivelElement.textContent, 10);

    // Verifica se a quantidade solicitada é maior do que a disponível
    if (qtd > qtdDisponivel) {
        alert('Quantidade solicitada Não Disponivel, por favor entrar em contato para mais informações.');
        return;
    }

    // Atualizando a quantidade disponível após a compra
    qtdDisponivel -= qtd;
    qtdDisponivelElement.textContent = qtdDisponivel;

    // Feedback Compra realizada
    alert('Compra realizada com sucesso!');
}
