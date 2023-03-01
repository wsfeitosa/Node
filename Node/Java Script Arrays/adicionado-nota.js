const notas = [10, 6, 8];

notas.push(7);

const calculaMedia = (notas = []) => {

    let soma = 0;

    for (let index = 0; index < notas.length; index++) {
        soma = soma + notas[index];
    }

    return soma / notas.length;
}

console.log(calculaMedia(notas));