// Dado o seguinte objeto:
const empresa = {
  nome: "ABC Corp",
  endereco: {
    cidade: "Nova York",
    estado: "NY",
  },
};

// Use destructuring para extrair cidade e estado do objeto empresa.
// Em seguida, imprima essas variáveis.

// Seu código aqui
const {
  endereco: { cidade, estado },
} = empresa;

console.log(cidade);
console.log(estado);
