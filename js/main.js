let livros = [];

const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscaLivros();



async function getBuscaLivros(){
    const res = await fetch(endPointAPI);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirLivrosNaTela(livrosComDesconto)
}




