// Crie uma função que recebe um objeto como parâmetro, utilizando destructuring.
// Extraia as propriedades 'nome' e 'idade', e defina um valor padrão de 25 para 'idade'.
// Em seguida, imprima "Olá, [nome]! Você tem [idade] anos."

// Seu código aqui
function suadacao({ nome, idade = 25 }) {
  return `Olá ${nome}! Você tem ${idade} anos.`;
}

const pessoa = {
  nome: "Victor",
};

console.log(suadacao(pessoa));
