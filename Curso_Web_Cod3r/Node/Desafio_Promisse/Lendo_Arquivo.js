const fs = require('fs')
const { parse } = require('path')
const path = require('path')

const caminho = path.join(__dirname, 'arquivo_leitura.txt')

function pegarArquivo(caminho) 
    {
        return new Promise(resolve => 
        {
            fs.readFile(caminho, (_, file) => 
            {
                resolve(file.toString())
            })
        })
    }

let obj = { 'lara': 01 }
pegarArquivo(caminho)
.then(conteudo => console.log(conteudo))
