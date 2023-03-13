const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exbibeNomeENota(aluno) {
    
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        
        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);

        console.log(`O aluno (a) ${alunos[indice]} está cadastrado!`);
        console.log(`A nota dele (a) é ${medias[indice]}`);



    } else { 
        console.log("Aluno não cadastrado");
    }

}

exbibeNomeENota("Juliana");
exbibeNomeENota("João");