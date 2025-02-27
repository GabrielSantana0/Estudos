const menorValor = 1;
const maiorValor = 10;
const numeroSecreto = gerarNumeroAleatorio();

    function gerarNumeroAleatorio() {
        return parseInt(Math.random() * maiorValor + 1);
}

console.log('numeroSecreto', numeroSecreto);

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;