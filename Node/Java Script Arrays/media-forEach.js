const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function (nota, index) {
    somaDasNotas += nota;
    console.log(`O indice atual é ${index}`);
});

let media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);
