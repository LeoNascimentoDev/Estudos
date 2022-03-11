/*
32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. 
*/
let vetor = []
function media (vetor)
    {
        let media =0
        for (el in vetor)
            {
                media += + vetor[el]
            }
        
        return (media/vetor.length)
    }

    vetor=[10,20,30,40]

    console.log('A média é: '+media(vetor))

