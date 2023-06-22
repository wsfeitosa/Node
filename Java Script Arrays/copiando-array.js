const notas = [7, 7, 8, 9];

const novasNotas = [...notas, 10];//... chama-se spread operator, ele copia oa array, sem alterar o original

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);