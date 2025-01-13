function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (tipoIngresso.value == 'pista'){
        comprarPista(quantidade);
    } else if (tipoIngresso.value == 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
}

function comprarPista(quantidade){
    let pista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > pista) {
        alert('Quantidade indisponível para tipo pista');
    } else if (quantidade < 0) {
    alert('Quantidade indisponível para tipo pista');
    } 
    else {
        pista = pista - quantidade;
        document.getElementById('qtd-pista').textContent = pista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(quantidade){
    let superior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > superior) {
        alert('Quantidade indisponível para tipo superior');
    } else if (quantidade < 0) {
    alert('Quantidade indisponível para tipo superior');
    } 
    else {
        superior = superior - quantidade;
        document.getElementById('qtd-superior').textContent = superior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(quantidade){
    let inferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > inferior) {
        alert('Quantidade indisponível para tipo inferior');
    } else if (quantidade < 0) {
    alert('Quantidade indisponível para tipo inferior');
    } 
    else {
        inferior = inferior - quantidade;
        document.getElementById('qtd-inferior').textContent = inferior;
        alert('Compra realizada com sucesso!');
    }
}