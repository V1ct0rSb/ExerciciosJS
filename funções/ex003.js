// Crie uma função anônima que aceita um array de números como parâmetro e retorna a média desses números. A média pode ser calculada somando todos os números e dividindo pelo total de números no array.

let array = [1, 2, 3, 4, 5, 6, 7];

const calcularMedia = (array) => {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total / array.length;
};

console.log(calcularMedia(array));
