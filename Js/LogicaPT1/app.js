alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre ${numeroMaximo}`);
    // se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`o número secreto é menor que ${chute} `);
        } else {
            alert(`o número secreto é maior que ${chute} `);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você acertou o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);

// if (tentativas > 1 ) {
//   alert(`Isso ai! Você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//   } else {
//            alert(`Isso ai! Você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//     }