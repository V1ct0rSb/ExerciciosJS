// Agora, combine as duas Promises para realizar a compra do café. Use o método .then() para lidar com o sucesso e o método .catch() para lidar com erros.
const selecionarCafe = (cafeEscolhido) => {
  return new Promise((resolve, reject) => {
    const cafesDisponiveis = ["Café A", "Café B", "Café C"];

    setTimeout(() => {
      if (cafesDisponiveis.includes(cafeEscolhido)) {
        resolve(`Você escolheu: ${cafeEscolhido}`);
      } else {
        reject("Desculpe, o café escolhido está esgotado.");
      }
    }, 1000);
  });
};

const realizarPagamento = () => {
  return new Promise((resolve, reject) => {
    const pagamentoBemSucedido = Math.random() < 0.8;

    setTimeout(() => {
      if (pagamentoBemSucedido) {
        resolve("Pagamento bem sucedido, o café está a caminho!!");
      } else {
        reject("ERRO NO PAGAMENTO, TENTE NOVAMENTE!!");
      }
    }, 1500);
  });
};

selecionarCafe("Café D")
  .then((mensagem) => {
    console.log(mensagem);
    return realizarPagamento();
  })
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((err) => {
    console.error(err);
  });
