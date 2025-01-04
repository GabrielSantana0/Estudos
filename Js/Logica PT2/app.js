let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let mensagemTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com  ${tentativas} ${mensagemTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'Errou! O número secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'Errou! O número secreto é maior.');
        }
    }
    tentativas++;
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
