function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>O chute não é um número</div>'
        return
        
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor invalido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = 
        `<h2> Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        `
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}