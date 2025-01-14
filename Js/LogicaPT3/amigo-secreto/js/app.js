let amigos = [];


function adicionar() {
    let amigo = document.getElementById('nome-amigo')
    if (amigo.value == '') {
        alert('Informe o nome do amigo!')
        return;
    }

    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
    atualizarLista();
    atualizarSorteio();
}


function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!')
        return;
    }

    embaralhar(amigos);


    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br/>';
        }
    }
}


function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}


function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function () {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}


function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
