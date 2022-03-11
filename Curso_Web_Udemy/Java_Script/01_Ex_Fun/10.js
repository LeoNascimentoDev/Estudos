// função que retorna boolean de divisão

const retorno = function (dividendo){
    if(dividendo % 3 == 0)
    {
        return true
    }
    else 
    {
        return false    
    }
}
console.log('O número é divisível por 3?: ' + retorno(15))