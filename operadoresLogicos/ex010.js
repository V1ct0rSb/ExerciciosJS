// Crie um programa para ajudar na decisão de compra de um carro.
// Pergunte ao usuário se o carro é novo (carroNovo) e se ele tem airbag (temAirbag).
// Recomende a compra se o carro for novo ou se tiver airbag.

// Exemplo:
// Carro Novo: true, Tem Airbag: false
// Output: Recomenda-se a compra

// Carro Novo: false, Tem Airbag: true
// Output: Recomenda-se a compra

var carroNovo = false;
var temAirbag = false;

if (carroNovo === true || temAirbag === true) {
  console.log("Recomenda-se a compra");
} else {
  console.log("Não Compre");
}
