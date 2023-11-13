// Verifique se um usuário pode assistir a um filme com classificação indicativa de 14 anos.
// Pergunte a idade do usuário e se seus pais estão presentes.
// Ele pode assistir se tiver 14 anos ou mais, ou se tiver menos de 14 anos, mas os pais estão presentes.

// Exemplo:
// Idade: 16, Pais Presentes: false
// Output: true

// Idade: 12, Pais Presentes: true
// Output: true

// Idade: 13, Pais Presentes: false
// Output: false

var idade = 12;
var pais = true;

if (idade >= 14 || pais === true) {
  console.log("Pode assistir");
} else {
  console.log("Não pode assitir");
}
