const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront')
btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivros)

function filtrarLivros() {
    let livrosFiltrados = livros.filter(livro => livro.categoria == 'front-end')
    
}