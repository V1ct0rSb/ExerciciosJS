// Utilizando Promise.all
// Crie três funções que retornam Promises: funcaoC, funcaoD, e funcaoE.
// Cada função deve resolver a Promise com uma mensagem após diferentes intervalos de tempo (por exemplo, 3 segundos, 1 segundo, 2 segundos).
// Use Promise.all para executar todas as funções simultaneamente e exibir um array com as mensagens resolvidas quando todas as Promises forem cumpridas.

function funcaoC() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Função C Concluida");
    }, 3000);
  });
}

function funcaoD() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Função D Concluida");
    }, 1000);
  });
}

function funcaoE() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Função E Concluida");
    }, 2000);
  });
}

Promise.all([funcaoC(), funcaoD(), funcaoE()])
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => console.error(erro));
