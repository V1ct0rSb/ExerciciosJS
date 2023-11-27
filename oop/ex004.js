// 1. Crie uma classe chamada CarrinhoDeCompras.
// 2. A classe deve ter uma propriedade 'itens' que é um array vazio no início.
// 3. Adicione métodos para adicionar itens ao carrinho e calcular o total.

class CarrinhoDeCompras {
  constructor() {
    this.itens = [];
  }

  addItem(item) {
    this.itens.push(item);
    console.log(`${item.nome} foi adicionado ao carrinho.`);
  }

  calcularTotal() {
    let total = 0;
    for (let i = 0; i < this.itens.length; i++) {
      total += this.itens[i].preco;
    }
    return total;
  }
}

const compras = new CarrinhoDeCompras();

const item1 = { nome: "Camiseta", preco: 29.99 };
const item2 = { nome: "Calça Jeans", preco: 49.99 };

compras.addItem(item1);
compras.addItem(item2);

console.log(compras.calcularTotal());
