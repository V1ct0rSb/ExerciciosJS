// 1. Crie um array chamado "cores" com pelo menos três cores.
// 2. Acesse e imprima no console a primeira cor do array.
// 3. Adicione uma nova cor ao final do array.
// 4. Remova a segunda cor do array.

// 1
var cores = ["amarelo", "azul", "verde", "vermelho", "preto", "branco"];
console.log(cores);

// 2
console.log(cores[0]);

// 3
cores.push("rosa");
console.log(cores);

// 4
cores.splice(1, 1);
console.log(cores);
