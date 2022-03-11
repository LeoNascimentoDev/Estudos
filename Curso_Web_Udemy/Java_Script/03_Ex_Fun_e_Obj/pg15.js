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


Media_das_Notas = function (aluno,notas) {

    notas = aluno.Notas_Aluno
    media_nota = 0
    for (el in notas) {
        media_nota += notas[el]
    }
    return ('A média das notas do aluno '+ aluno.Nome_Aluno+' é: ' + media_nota / notas.length)
}

Criar_Aluno("Pedro", [10, 9, 8, 7])
Criar_Aluno("Lucas", [18, 9, 28, 7])
Criar_Aluno("Joaquim",[22,20,30,31])
console.log(Todos_Alunos)
console.log(Todos_Alunos[0].Nome_Aluno)
console.log(Media_das_Notas(Todos_Alunos[0]))
