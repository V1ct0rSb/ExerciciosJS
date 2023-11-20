// Crie uma função que recebe um objeto como parâmetro
// e utiliza destructuring para extrair as propriedades nome e sobrenome.
// Em seguida, imprima "Nome Completo: [nome] [sobrenome]".

// Seu código aqui

function saudacao({ nome, sobrenome }) {
  return `Nome Completo: ${nome} ${sobrenome}`;
}

const pessoa = {
  nome: "Victor",
  sobrenome: "Barreto",
};

console.log(saudacao(pessoa));
