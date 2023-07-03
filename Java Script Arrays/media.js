const notas = [10, 6.5, 8, 7.5];

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

const calculaMedia = (notas = []) => {

    let soma = 0;

    for (let index = 0; index < notas.length; index++) {
        soma = soma + notas[index];
    }

    return soma / notas.length;
}

console.log(media);
console.log(notas);
console.log(calculaMedia(notas));