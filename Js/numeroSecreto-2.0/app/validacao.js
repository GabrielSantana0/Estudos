function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if(Number.isNaN(numero)){
        console.log('O chute não é um número')
        
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        console.log(`Valor invalido: o número secreto precisa estar entre ${menorValor} e ${maior Valor}`)
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}