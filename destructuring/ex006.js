// Dado o seguinte array de objetos:
const pessoas = [
  { nome: "Alice", idade: 30 },
  { nome: "Bob", idade: 25 },
  { nome: "Carol", idade: 35 },
];

// Utilize destructuring para extrair o nome da segunda pessoa.
// Em seguida, imprima o nome.

// Seu código aqui

const { nome: nomeSegundaPessoa } = pessoas[1];

console.log(nomeSegundaPessoa);
