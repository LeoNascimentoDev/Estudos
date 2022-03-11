/*
Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
*/


function retornar (array)
    {
        let maior_numero = 0
        let segundo =0
        array.forEach(element => {
            if (segundo<element)
                {
                    segundo = element
                }
                console.log(segundo)
            if (element>maior_numero)
                {
                    segundo =maior_numero
                    maior_numero =element
                }
        });


        return('O maio número do array é: ' + segundo)
    }

    let array = [10,50,35,94]

    console.log( retornar(array))