const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@domimio.com",
};

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade}`);

console.log(`Os 3 primeiros digitos do cpf são ${cliente.cpf.substring(0,3)}`);