function apresentar(nome) {
    return `meu nome é ${nome}`;
}

const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

console.log(apresentarArrow('wellington'));
console.log(apresentar("kiko"));
console.log(soma(3, 15));

//Arrow function com mais de uma linha de instrução
const somaNumerosPequenos = (num1, num2) => {

    if (num1 > 10 || num2 > 10) {
        return "Somente numeros de 1 a 9"
    }

    return num1 + num2;

}

console.log(somaNumerosPequenos(3, 15));