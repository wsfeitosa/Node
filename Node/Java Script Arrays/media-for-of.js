const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let nota of notas) {
    somaDasNotas += nota;    
}

let media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);

//for of com index
for (const [index, value] of notas.entries()) {  
    console.log(index, value);
}