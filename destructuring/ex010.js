// Dado o seguinte array:
const numeros = [1, 2, 3, 4, 5];

// Utilize destructuring para extrair o primeiro número e o restante em um novo array.
// Em seguida, imprima o primeiro número e o array restante.

// Seu código aqui
const [primeiro, ...restante] = numeros;

console.log(primeiro);
console.log(restante);

