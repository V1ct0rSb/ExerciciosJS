// Crie uma Promise para simular o processo de seleção do café. A Promise deve ser resolvida se o café escolhido estiver disponível e rejeitada se o café estiver esgotado.

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
