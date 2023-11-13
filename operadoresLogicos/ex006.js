// Crie um sistema de autenticação simples.
// Pergunte ao usuário se ele tem conta (contaExistente) e se sabe a senha (senhaCorreta).
// Só permita o acesso se a conta existir e a senha estiver correta.

// Exemplo:
// Conta Existente: true, Senha Correta: true
// Output: Acesso permitido

// Conta Existente: false, Senha Correta: true
// Output: Acesso negado

var senha = "senha123";
var informada = "senha123";
var contaExistente = false;

if (contaExistente === true) {
  if (senha === informada) {
    console.log("Acesso Permitido");
  } else {
    console.log("Senha Incorreta");
  }
} else {
  console.log("Faça o cadastro");
}
