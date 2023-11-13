// Crie um sistema de desconto em uma loja online.
// Pergunte ao usuário o total de suas compras e se ele é um cliente frequente (clienteFrequente).
// Se o total for maior que 100 e o cliente for frequente, conceda um desconto de 10%.

// Exemplo:
// Total de Compras: 120, Cliente Frequente: true
// Output: Total com desconto: 108

var total = 120;
var clienteFrequente = true;

if (total > 100 && clienteFrequente === true) {
  console.log("total: " + (total - total / 10));
} else {
  console.log("Total: " + total);
}
