function adicionarCaracter(caracter){
    const valorInput = document.querySelector('.display').value
    document.querySelector('.display').value = valorInput + caracter
}

function limparTela(limpar) {
    document.querySelector('.display').value = ''
}

function calcular(){
    const valorInput = document.querySelector('.display').value
    document.querySelector('.display').value = eval(valorInput)
}

function inverte(){
    const valorInput = document.querySelector('.display').value
    document.querySelector('.display').value = valorInput * -1
}