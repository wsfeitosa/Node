const notas = [10, 6, 8, 5.5, 10];

notas.pop();

const calculaMedia = (notas = []) => {

    let soma = 0;

    for (let index = 0; index < notas.length; index++) {
        soma = soma + notas[index];
    }

    return soma / notas.length;
}

console.log(notas);
console.log(`A Média é ${calculaMedia(notas)}`);