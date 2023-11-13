// Verifique se um número digitado é primo.
// Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.

// Exemplo:
// Número: 7
// Output: true (7 é primo)

// Número: 14
// Output: false (14 não é primo)

var num = 14;
var condicao = true;

for (var i = 2; i < num; i++) {
  if (num % i === 0) {
    condicao = false;
    break;
  }
}

console.log(condicao);
