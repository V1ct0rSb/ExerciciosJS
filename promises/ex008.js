// Promises Encadeadas
// Encadeando Promises:
// Crie duas funções que retornam Promises: funcaoA e funcaoB.
// funcaoA deve resolver a Promise com a mensagem "Função A concluída" após 2 segundos.
// funcaoB deve resolver a Promise com a mensagem "Função B concluída" após 1 segundo.
// Encadeie essas duas Promises para que a mensagem "Todas as funções concluídas" seja exibida no console.

function funcaoA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Função A concluida");
    }, 2000);
  });
}

function funcaoB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Função B");
    }, 1000);
  });
}

funcaoA()
  .then((mensagem) => {
    console.log(mensagem);
    return funcaoB();
  })
  .then((mensagem) => console.log(mensagem))
  .catch((erro) => console.error(erro));
