// Tratamento de erros em Promises
// Lidando com erros:
// Modifique a função promessaBasica para que ela seja rejeitada após 2 segundos, em vez de resolvida.
// Adicione um bloco .catch ao utilizar a Promise para lidar com o erro e exibir a mensagem de erro no console.

function promessaBasica() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise rejeitada");
    }, 2000);
  });
}

promessaBasica()
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.error(erro);
  });
