//função de juros compostos e de juros simples


let a = function simples (capIni,txJuros,tempo)
{
    let y =[capIni*(1+txJuros*tempo/100)]
    y[1] = capIni*((1+txJuros/100)**tempo)
    return y
}

console.log(a(5300,10,10))



