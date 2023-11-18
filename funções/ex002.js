// Crie uma função chamada verificarPar que aceita um número como parâmetro e retorna true se o número for par e false se for ímpar. Utilize uma arrow function para implementar esta função.

const verificarPar = (a) => {
  var verificador = true;
  if (a % 2 === 0) {
    return verificador;
  } else {
    verificador = false;
    return verificador;
  }
};

console.log(verificarPar(7));
