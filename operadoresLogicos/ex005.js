// Verifique se um ano é bissexto.
// Um ano é bissexto se for divisível por 4, mas não por 100, a menos que seja divisível por 400.

// Exemplo:
// Ano: 2000
// Output: true

// Ano: 1900
// Output: false

var num = 1900;

if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
  console.log("true");
} else {
  console.log("false");
}
