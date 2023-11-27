// Crie outra Promise para simular o processo de pagamento. A Promise deve ser resolvida se o pagamento for bem-sucedido e rejeitada se houver um problema no pagamento.

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

