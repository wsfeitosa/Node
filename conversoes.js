
const numero = 456;
const numeroString = "456";
const numeroStringComLetra = "456a";


//Convers�o implicita para numero
console.log(numero == numeroString);
//Compara��o identico
console.log(numero === numeroString);
//Convers�o implicita para String
console.log(numero + numeroString);
//Convers�o explicita �para numero
console.log(numero + Number(numeroString));
//Convers�o explicita para string
console.log(String(numero) + numeroString);
//Convers�o de numero com erro
console.log(numero + Number(numeroStringComLetra));



