// 1. Crie uma classe chamada Livro.
// 2. A classe deve ter propriedades como 'titulo' e 'autor', e um método chamado 'detalhes' que retorna informações sobre o livro.

class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }

  detalhes() {
    return `O livro add foi o livro ${this.titulo} do autor ${this.autor}`;
  }
}

const livro = new Livro("Trono de Vidro", "Sarah J. Mass");
console.log(livro.detalhes());

