/*

Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num 
array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto com os atributos nome e media,
que indica o aluno que teve o melhor desempenho nas notas.

*/



function Aluno(nome, notas)       // função construtora --> substitui o Object em "new object"
{
    this.Nome_Aluno = nome
    this.Notas_Aluno = notas
    this.Media_das_Notas = () => {
        media_nota = 0
        for (el in this.Notas_Aluno) {
            media_nota += this.Notas_Aluno[el]
        }

        return ('A média das notas é: ' + media_nota / this.Notas_Aluno.length)
    }
}


const aluno1 = new Aluno('Lucas', [10, 5, 9])
const aluno2 = new Aluno('Pedro', [10, 8, 9, 6])

const Todos_Alunos = { aluno1, aluno2 }
//console.log(Todos_Alunos)

function retorno(objalunos) {
    for (i in objalunos) {
        console.log(objalunos.Aluno)
        return (objalunos.Aluno)//Nome_Aluno, objalunos.Aluno.Media_das_Notas()
    }
}

retorno(Todos_Alunos)