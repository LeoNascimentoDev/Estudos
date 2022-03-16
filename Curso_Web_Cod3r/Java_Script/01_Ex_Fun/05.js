// retornar valor em real ajustado por centavos

// forma bruta
function real (a)
{
    let b = Math.floor(100*a)
    
    return b    
}

let c = 0.1 + 0.2
let b = 0.1 + 0.2

console.log(c)
console.log('R$0,'+real(c))

// forma correta

function real2 (b)
{
    let c = b.toFixed(2).toString().replace(".", ",") // para mudar para string e trocar ponto por vírgula
    return c
}

console.log('R$'+real2(b))


let zz = t => t.toFixed(2).toString().replace(".", ",") // UTILIZANDO ARROW FUNCTION
console.log('R$'+zz(0.55555555))



