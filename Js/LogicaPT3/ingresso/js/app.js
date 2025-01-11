function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (tipoIngresso.value == 'pista'){
        comprarPista(quantidade);
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