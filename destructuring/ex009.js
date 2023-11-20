// Dada a seguinte string:
const endereco = "Rua das Flores, 123, São Paulo";

// Utilize destructuring para extrair o nome da rua e a cidade.
// Em seguida, imprima essas variáveis.

const [nomeRua, , cidade] = endereco.split(", ");

console.log(nomeRua); // Rua das Flores
console.log(cidade); // São Paulo
