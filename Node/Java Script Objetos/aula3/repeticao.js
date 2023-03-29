const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ['1155555550', '1144444440'],
};

cliente.endereco = {
  rua: "R. Joseph Climber",
  numero: 1337,
  apartamento: true,
  complemento: "ap 934",
};

for (let chave in cliente) {
    let tipo = typeof cliente[chave];

    console.log(`A propriedade ${chave} é do tipo ${tipo}`);

    if (tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);       
    }
}
