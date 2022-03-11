// função que compara array de strings e retorna vetor

let pontos = [12,2,20,5,3,15,17,7]
console.log(pontos)

function AdcionarPontos (a){
    pontos.push(a)
    let contadorMaior = 0
    let contadorMenor =0
    let contadorIgual = -1
    let comparar = 1
        for (i in pontos)
        {
            if (pontos[i] < a) 
            {
//                console.log('Menor')
                contadorMenor++
            }
            else if (pontos[i] == a)
            {
  //              console.log('Igual')
                contadorIgual++
            }
            else 
            {
    //            console.log('Maior')
                contadorMaior++
            }

            if (i!=0){

                if (pontos[i] < pontos[i-1]) 
            {
                comparar++
            }
            }
            
       
        }

        //console.log('O jogo em que você fez menos pontos foi o jogo ' + comparar + pontos.filter(minumun))


        console.log('Você fez mais pontos ' + contadorMaior + ' vezes')
        console.log('Você fez menos pontos ' + contadorMenor + ' vezes')
        console.log('Você fez essa quantidade de pontos ' + contadorIgual + ' vezes')

}

AdcionarPontos (4)

