// Exercício 3: Crie uma função que verifica se um número é par. Use o operador % (módulo) para fazer essa verificação.

function parOuImpar(a) {
  if (a % 2 === 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

console.log(parOuImpar(3));
