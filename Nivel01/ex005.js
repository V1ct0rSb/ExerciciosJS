// 1. Crie um loop "for" que imprima os números de 1 a 5 no console.
// 2. Modifique o loop para imprimir apenas os números pares de 2 a 10.

// 1
var n = 5;
for (var i = 1; i <= n; i++) {
  console.log(i);
}

// 2
for (var i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    console.log("Número par: " + i);
  } else {
    console.log("Númeor Impar: " + i);
  }
}
