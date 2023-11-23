// 1. Adicione uma propriedade 'idade' à classe Pessoa.
// 2. Modifique o método 'apresentar' para incluir a idade na mensagem.

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    return `Minha idade é ${this.idade}`;
  }
}

const novaPessoa = new Pessoa("Victor", 22);

console.log(novaPessoa.apresentar());
