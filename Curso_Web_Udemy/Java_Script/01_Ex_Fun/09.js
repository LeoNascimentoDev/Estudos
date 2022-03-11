// função de aprovação


function aprova (nota){

    let arre = (nota/5)
    let arredondada = arre.toFixed(0)*5
    
    if (arredondada < 38)
    {
        console.log('Reprovado, nota: ')
        return nota
    }
    else {
        console.log('Aprovadom nota: ')
        
        if (arredondada<nota)
        return nota
        else return arredondada
    }

}

console.log(aprova(38))