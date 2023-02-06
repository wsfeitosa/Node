
const numero = 456;
const numeroString = "456";
const numeroStringComLetra = "456a";


//Conversão implicita para numero
console.log(numero == numeroString);
//Comparação identico
console.log(numero === numeroString);
//Conversão implicita para String
console.log(numero + numeroString);
//Conversão explicita ´para numero
console.log(numero + Number(numeroString));
//Conversão explicita para string
console.log(String(numero) + numeroString);
//Conversão de numero com erro
console.log(numero + Number(numeroStringComLetra));



