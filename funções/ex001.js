// Crie uma função chamada calcular que aceita três parâmetros:

// numero1: O primeiro número para a operação.
// numero2: O segundo número para a operação.
// operacao: A operação a ser realizada, que pode ser representada por uma string: "soma", "subtracao", "multiplicacao" ou "divisao".
// Utilize uma arrow function para implementar a função calcular.

// Dentro da função calcular, utilize um switch-case para determinar qual operação deve ser realizada com base no parâmetro operacao.

// Retorne o resultado da operação.
const calcular = (a, b, c) => {
  switch (c) {
    case "soma":
      return a + b;
      break;
    case "subtracao":
      return a - b;
      break;
    case "multiplicacao":
      return a * b;
      break;
    case "divisao":
      if (a === 0 || b === 0) {
        return "Divisão por 0 não é permitida";
      } else {
        return a / b;
      }
    default:
      return "Valor informado é invalido";
      break;
  }
};

console.log(calcular(5, 3, "soma")); // Resultado: 8
console.log(calcular(10, 2, "subtracao")); // Resultado: 8
console.log(calcular(4, 6, "multiplicacao")); // Resultado: 24
console.log(calcular(8, 2, "divisao")); // Resultado: 4
console.log(calcular(5, 0, "divisao")); // Resultado: "Divisão por zero não é permitida."
console.log(calcular(3, 4, "potencia")); // Resultado: "Operação inválida. Escolha entre 'soma', 'subtracao', 'multiplicacao' ou 'divisao'."
