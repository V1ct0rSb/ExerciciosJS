// Verifique se uma string é um palíndromo.
// Um palíndromo é uma palavra, frase, número ou qualquer sequência de caracteres que se lê da mesma forma de trás para frente.

// Exemplo:
// Palavra: "radar"
// Output: true

// Palavra: "javascript"
// Output: false

var palavra = "javascript";
var reverse = palavra.split("").reverse().join(""); //Inverter uma string

if (palavra === reverse) {
  console.log(true);
} else {
  console.log(false);
}
