// 1. Crie uma classe chamada Pessoa.
// 2. A classe deve ter um construtor que recebe um nome como parâmetro.
// 3. Adicione um método chamado 'apresentar' que retorna uma mensagem de apresentação com o nome da pessoa.

class Pessoas {
  constructor(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }

  apresentar(nome) {
    return `Bem Vindo, meu nome é ${this.nome}`;
  }
}

const victor = new Pessoas("Victor", 17, "Masculino");

console.log(victor.apresentar());
