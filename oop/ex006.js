// 1. Crie uma classe chamada ContaBancaria.
// 2. A classe deve ter propriedades como 'saldo' e 'titular'.
// 3. Adicione métodos para depositar e sacar dinheiro da conta.
// 4. Adicione um método para exibir o saldo atual.

class ContaBancaria {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de $${valor.toFixed(2)} realizado.`);
  }

  sacar(valor) {
    this.saldo -= valor;
    console.log(`Saque de $${valor.toFixed(2)} realizado. `);
  }

  exibirSaldo() {
    return `Seu saldo é de R$${this.saldo}`;
  }
}

const conta01 = new ContaBancaria("Victor");
console.log(conta01.exibirSaldo());
conta01.depositar(400);
console.log(conta01.exibirSaldo());
conta01.sacar(1400);
console.log(conta01.exibirSaldo());
