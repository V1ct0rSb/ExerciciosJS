// Verifique se uma pessoa pode votar
// Pergunte a idade e se a pessoa tem nacionalidade brasileira.
// Ela pode votar se tiver pelo menos 16 anos e for brasileira.

// Exemplo:
// Idade: 18, Brasileira: true
// Output: true

// Idade: 15, Brasileira: true
// Output: false

// Idade: 20, Brasileira: false
// Output: false

var idade = 14;
var brasileira = "true";

if (idade >= 16 && brasileira === "true") {
  console.log("Pode votar");
} else {
  console.log("Não pode votar");
}
