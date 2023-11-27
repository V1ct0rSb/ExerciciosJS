// Crie uma função chamada realizarOperacaoMatematica que recebe dois números e realiza uma operação matemática assíncrona (por exemplo, adição, subtração, multiplicação). A função deve retornar uma Promise que é resolvida com o resultado da operação ou rejeitada se os números não forem válidos.

const realizarOperacaoMatematica = (num01, num02, operacao) => {
  return new Promise((resolve, reject) => {
    if (typeof num01 !== "number" || typeof num02 !== "number") {
      reject("Os números informados não são validos.");
    } else {
      setTimeout(() => {
        switch (operacao) {
          case "soma":
            resolve(num01 + num02);
            break;
          case "subtracao":
            resolve(num01 - num02);
            break;
          case "multiplicacao":
            resolve(num01 * num02);
            break;
          case "divisao":
            resolve(num01 / num02);
            break;
          default:
            reject("Operacao Invalida");
        }
      }, 1000);
    }
  });
};

realizarOperacaoMatematica(5, 3, "subtracao")
  .then((mensagem) => console.log(mensagem))
  .catch((err) => {
    console.error(err);
  });
