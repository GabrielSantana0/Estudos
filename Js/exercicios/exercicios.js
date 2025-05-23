const livros = [
{ nome: 'Livro A', preco: 40 },
{ nome: 'Livro B', preco: 60 },
{ nome: 'Livro C', preco: 80 }
];

const desconto = 0.2;
const livrosComDesconto = livros.map(livro => ({
...livro,
  preco: (livro.preco - livro.preco * desconto).toFixed(2)
}));

livrosComDesconto.forEach(livro => console.log(`${livro.nome}: R$ ${livro.preco}`));