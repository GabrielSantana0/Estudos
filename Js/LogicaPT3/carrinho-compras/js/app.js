let totalGeral = 0;

function adicionar(){
    //recuperar valores: nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //calcular o preço, e o subtotal
    let preco = quantidade * valorUnitario;
    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML =  carrinho.innerHTML +`<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;
    //atualizar o grande total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
}

function limpar(){
    document.getElementById('lista-produtos').value = '';
    document.getElementById('quantidade').value = '';
    
}