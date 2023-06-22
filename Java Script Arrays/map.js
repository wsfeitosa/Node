const notas = [10, 9.5, 8, 7, 6];

// o Método map não reescreve o array original
const notasAtualizadas = notas.map((nota, indice) => {
    return nota + 1 >= 10 ? 10: nota + 1;
});

console.log(notas);
console.log(notasAtualizadas);