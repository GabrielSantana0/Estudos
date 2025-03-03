function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>O chute não é um número</div>'
        return
        
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor invalido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = 
        `<h2> Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>o número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    </div>`
    }else  {
        elementoChute.innerHTML += `<div>o número secreto é maior <i class="fa-solid fa-up-long"></i></div>
    </div>`
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}