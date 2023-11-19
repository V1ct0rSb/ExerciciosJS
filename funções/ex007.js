// Sistema de Autenticação:
// Crie um sistema de autenticação simples. Solicite ao usuário que insira um nome de usuário e uma senha. Se o nome de usuário for "admin" e a senha for "12345", imprima "Login bem-sucedido". Caso contrário, informe "Credenciais incorretas".

var senha = 12345;
var usuario = "admin";

var status =
  senha === 12345 && usuario === "admin"
    ? "Seja Bem-vindo"
    : "Credenciais Incorretas";

console.log(status);
