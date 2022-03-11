/* 11) ​As regras para o cálculo dos anos bissextos são as seguintes: 
De 4 em 4 anos é ano bissexto; 
De 100 em 100 anos não é ano bissexto; 
De 400 em 400 anos é ano bissexto; 
Prevalecem as últimas regras sobre as primeiras. 
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a 
mensagem e retornando  true ou false.  
*/

console.log('Exercício 11')

function bissexto(ano) {
    var x = ano
    console.log('\n O ano ' + x)
    if (ano <= 0) {
        return false
    }
    else if (ano % 400 == 0) {
        return true
    }
    else if (ano % 100 == 0) {

        return false
    }
    else if (ano % 4 == 0) {
        return true
    }
    else {
        return false
    }

}


console.log('\n É bissexto? ' + bissexto(2300))


/*
12)​ Faça um algoritmo que calcule o fatorial de um número. 
 */
console.log('\nExercício 12')


function fatorialCerto(num) {

    let num3 = 1
    for (let i = 1; i <= num; i++) {
        num3 = num3 * i
    }
    return num3
}

function fatorialInv(num, num2) {

    let num3 = num2
    for (let i = 1; i < num; i++) {
        num3 = num3 / i
    }
    return num3
}

function fatorial(num) {
    console.log('\n O fatorial de ' + fatorialInv(num, fatorialCerto(num)) + ' é: ' + fatorialCerto(num))
}


fatorial(8)

/*
 13) ​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao 
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. 
 */
console.log('\nExercício 13')

const diasemana = ['','Domingo','Segunda','Terça','Quarta','Quinta', 'Sexta', 'Sabado']

function diaUtil(dia) {
    let day 
    console.log('\n ')
       switch (Math.abs(dia)) {
        case 1:
            day = "Domingo não é dia útil"
            break;
        case 2:
            day = "Segunda é dia útil"
            break;
        case 3:
            day = "Terça é dia útil"
            break;
        case 4:
            day = "Quarta é dia útil"
            break;
        case 5:
            day = "Quinta é dia útil"
            break;
        case 6:
            day = "Sexta é dia útil"
            break;
        case 7:
            day = "Sábado não é dia útil"
            break
        default:
            console.log('erro')
         
    }
    console.log(day)
}
function validarDia(dia)
    {   
        let retorno
        for (i in diasemana)
        {
            
            if (diasemana[i] == dia)
            {
                retorno = i
            }
        }

        if(retorno >=1 && retorno<= 7 )  
        {
            diaUtil(retorno)
        }
        else
        {
            console.log('O dia está escrito errado. Coloque a primeira letra maiúscula e sem acentos.')

        }
    }

validarDia('Sabado')

/*
14) ​Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três 
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com 
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie 
também um default, que retornará uma mensagem de erro no console.  
*/
console.log('\nExercício 14')

let fruta
let veriricar = function(fruta)
{
    switch (fruta)
    {
        case 'maçã':
        
            console.log('Não vendemos '+fruta)
            break

        case 'kiwi':
            console.log(`Estamos sem estoque de ${fruta}` )
            break
        
        case 'melância':
            console.log('Aqui está, são 3 reais o quilo.')
            break        

        default:
            console.log('Nome de fruta inválida')
    }
}

veriricar('melância')



/*
15) ​Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda 
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o 
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza 
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console: 
“Não trabalhamos com este tipo de automóvel aqui”. 
 */
console.log('\nExercício 15')

console.log( '\n MESMA EXTRUTURA DO EXERCÍCIO ANTERIOR ')



/*
16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe 
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores 
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  Crie um caso default para operações inválidas. 
*/
console.log('\nExercício 16')

function opreacao (valor1,op,valor2)
{
    switch (op)
    {
        case '+':
        
            console.log('O resutado da soma de: '+ valor1 +op + valor2 +' é: '+ (valor1 + valor2)) // necessita dos () para não concatenar
            break

        case '-':
            console.log('O resutado da subtração de: '+ valor1 +op + valor2 +' é: '+ (valor1 - valor2) )
            break
        
        case '*':
            console.log('O resutado da multiplicação de: '+ valor1 +op + valor2 +' é: ' + (valor1 * valor2))
            break        
    
        case '/':
            console.log('O resutado da divisão de: '+ valor1 +op + valor2 +' é: '+ valor1 / valor2)
            break        
    
        default:
            console.log('Operação inválida')
    }
}

opreacao(3,'*',3)

/*
17)​ Um funcionário irá receber um aumento de acordo com o seu plano de 
trabalho, de acordo com a tabela abaixo:  
Plano  Aumento 
A  10% 
B  15% 
C  20% 
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu 
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. 
*/
console.log('\nExercício 17')
let aumento
function planotrabalho (plano)
    {
        switch(plano)
        {
            case 'A':
                return aumento =1.1
                break
            
            case 'B':
                return auemtno =1.15
                break

            case 'C':
                return auemtno =1.2
                break

            default:
                return console.log('Plano errado')
        }      
    }

    function novosalario(salario,plano)
        {
            let novosalario = salario * planotrabalho(plano)
            let retorno = console.log('O novo salário será de: R$' + novosalario)
        
        }

novosalario(1000,'A')

/*
18)​ Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando 
switch. Crie um case default que escreva ‘Número fora do intervalo.’ 
*/
console.log('\nExercício 18')


/*
  19) ​O cardápio de uma lanchonete é o seguinte: 
Código  Descrição do Produto  Preço 
100  Cachorro Quente  R$ 3,00 
200  Hambúrguer Simples  R$ 4,00 
300  Cheeseburguer  R$ 5,50 
400  Bauru  R$ 7,50 
500  Refrigerante  R$ 3,50 
600  Suco  R$ 2,80 
Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor 
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o 
comando switch. Crie um caso default para produto não existente. 
*/
console.log('\nExercício 19')

/*
20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas 
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. 
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve 
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. 
*/
console.log('\nExercício 20')