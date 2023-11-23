// 1. Crie uma classe chamada Produto com propriedades como 'nome' e 'preco'.
// 2. Crie uma subclasse chamada ProdutoEletronico que estende a classe Produto e adiciona uma propriedade 'marca'.
// 3. Adicione um método na subclasse para exibir informações do produto eletrônico.

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

class ProdutoEletronico extends Produto {
  constructor(nome, preco, marca) {
    super(nome, preco);
    this.marca = marca;
  }

  exbirInformacao() {
    return `O produto de nome: ${this.nome}, preço R$${this.preco} e da marca ${this.marca}`;
  }
}

const tv = new ProdutoEletronico("televisor", 2195.95, "Samsung");
console.log(tv.exbirInformacao());
