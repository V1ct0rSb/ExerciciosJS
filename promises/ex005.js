// Crie uma função chamada buscarUsuario que simula uma busca assíncrona de um usuário em um banco de dados. A função deve receber um nome de usuário e retornar uma Promise que é resolvida com os detalhes do usuário ou rejeitada se o usuário não for encontrado.

const usuarios = [
  { nome: "Alice", id: 1 },
  { nome: "Bob", id: 2 },
  { nome: "Charlie", id: 3 },
];

const buscarUsuario = (nomeUsuario) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuario = usuarios.find((u) => u.nome === nomeUsuario);
      if (usuario) {
        resolve(usuario);
      } else {
        reject(`Usuário ${nomeUsuario} não encontrado.`);
      }
    }, 1000);
  });
};

buscarUsuario("Bob")
  .then((usuario) =>
    console.log(`Detalhes do usuário: ${JSON.stringify(usuario)}`)
  )
  .catch((erro) => console.error(erro));
