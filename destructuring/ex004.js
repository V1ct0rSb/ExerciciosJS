// Dado o seguinte objeto:
const configuracao = {
  largura: 300,
  cor: "vermelho",
};

// Use destructuring para extrair largura e cor do objeto.
// Atribua valores padrão de 100 para largura e 'azul' para cor, caso não estejam definidos.
// Em seguida, imprima as variáveis.

// Seu código aqui

// Destructuring com valores padrão
const { largura = 100, cor = "azul" } = configuracao;

// Impressão das variáveis
console.log("Largura:", largura);
console.log("Cor:", cor);

// Neste código, as variáveis largura e cor são extraídas do objeto configuracao usando a sintaxe de destructuring. Se essas propriedades não estiverem definidas no objeto, os valores padrão de 100 para largura e 'azul' para cor serão usados. Em seguida, os valores das variáveis são impressos no console.

// const configuracao = {
//     largura: undefined,
//     cor: undefined,
//   };
