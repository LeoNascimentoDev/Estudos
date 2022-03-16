// exemplo de utilização de 
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

let funcionarios = []
axios.get(url).then(response => {
    funcionarios = response.data



    function Genero(arrayfun, genero) {
        if (genero == 'Feminino' || genero == 'feminino') {
            return arrayfun.genero == 'F'
        }
        else if (genero == 'Masculino' || genero == 'masculino') {
            return arrayfun.genero == 'M'
        }
        else console.log("Gênero escrito errado")
    }

    function Nacionalidade(arrayfun, nacionalidade) {

        return arrayfun.pais == nacionalidade
    }

    function Menor_Salario(arrayfun,arrayfun2) {

        return arrayfun.salario < arrayfun2.salario ? arrayfun : arrayfun2

    }

    let fun1 = funcionarios.filter(function (p) {
        return Genero(p, 'Feminino')
    })

    let fun2 = fun1.filter(function (p) {
        return Nacionalidade(p, 'China')
    }) 

    let fun3 = fun2.reduce(Menor_Salario)

    console.log(fun3)


})


