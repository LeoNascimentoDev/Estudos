const bodyParser = require('body-parser')
const express = require("express")
const app = express()

app.use(express.static('.'))   // provem os conteúdos estáticos da página 

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/test', (req, res) => res.send("ok"))

app.listen(8080, () => console.log("Executando.."))   // executa o server na porta 8080