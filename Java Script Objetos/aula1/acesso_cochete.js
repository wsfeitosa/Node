const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@domimio.com",
};

console.log(`O nome do cliente é ${cliente['nome']} e essa pessoa tem ${cliente['idade']}`);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
});