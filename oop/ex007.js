// 1. Crie uma classe chamada Contato.
// 2. A classe deve ter propriedades como 'nome', 'telefone' e 'email'.
// 3. Adicione um método para exibir as informações do contato.

class Contato {
  constructor(nome, telefone, email) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
  }

  exibirContato() {
    return `Nome: ${this.nome}, Telefone: ${this.telefone}, Email: ${this.email}`;
  }
}

const contato01 = new Contato("Victor", 123456789, "Victor123@gmail.com");
console.log(contato01.exibirContato());
