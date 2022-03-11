/*

Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num 
array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto com os atributos nome e media,
que indica o aluno que teve o melhor desempenho nas notas.

*/


const Todos_Alunos = []

Criar_Aluno = function (nome, notas) {

    const Aluno = new Object
    Aluno.Nome_Aluno = nome
    Aluno.Notas_Aluno = notas
    Aluno.id = Todos_Alunos.length
    Todos_Alunos.push(Aluno)
}


Media_das_Notas = function (aluno) {

    media_nota = 0
    for (el in aluno.Notas_Aluno) {
        media_nota += aluno.Notas_Aluno[el]
    }
    return ('A média das notas do aluno ' + aluno.Nome_Aluno + ' é: ' + media_nota / aluno.Notas_Aluno.length)
}

Media = function (notas) {

    media_nota = 0
    for (el in notas) {
        media_nota += notas[el]
    }
    return (media_nota / notas.length)
}

function Melhor_Aluno(Todos) {

    let todas_notas = []
    let todas_medias = []
    let maior_media = []
    let melhor_aluno =0
    for (i in Todos) {
        todas_notas.push(Todos[i].Notas_Aluno)
    }
    for (i in todas_notas) {
        todas_medias.push(Media(todas_notas[i]))
    }
    for (i in todas_medias) {

        if (maior_media <= todas_medias[i]) 
        {
            maior_media = todas_medias[i]
            melhor_aluno = i
        }
    }
    console.log('O melhor aluno, com a média: ' + maior_media + ', foi o aluno ' + Todos[melhor_aluno].Nome_Aluno + '.')
}

// Criando os alunos

Criar_Aluno("Pedro", [10, 9, 8, 7])
Criar_Aluno("Lucas", [1, 2,3, 4])
Criar_Aluno("Jo",[10,20,33,3])
Criar_Aluno("Marcos",[10,2,3,3])
Criar_Aluno("Maria",[10,20,33,3])
Criar_Aluno("Julia",[10,20,33,33])

// Chamando as funções e mostrando no console

console.log(Todos_Alunos)
console.log(Todos_Alunos[1].Nome_Aluno)
console.log(Media_das_Notas(Todos_Alunos[4]))
Melhor_Aluno(Todos_Alunos)

