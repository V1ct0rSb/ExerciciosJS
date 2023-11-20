// Dado o seguinte objeto:
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
};

// Utilize destructuring para extrair a marca e renomeie-a para 'fabricante'.
// Em seguida, imprima a variável 'fabricante'.

// Seu código aqui

const { marca: fabricante } = carro;

console.log(fabricante);
