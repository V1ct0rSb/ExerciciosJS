// Crie uma função chamada promessaBasica que retorna uma Promise.
// A Promise deve ser resolvida após 2 segundos com a mensagem "Promise resolvida com sucesso!".

function promessaBasica() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promessa resolvida com sucesso!!");
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
