// qual o tipo de triangulo ??

let tipo = ['Equilátero', 'Isoceles','Escaleno','erro']

function triangulo (a,b,c) {

    if(a == b && a==c) 
    {
        console.log(tipo[0])
    }
    else if(a==b || a==c  || c==b) 
    {
        console.log(tipo[1])
    }
    else if(a!=b && b!=c && c!=a)
    {
        console.log(tipo[2])
    }
    else console.log(tipo[3])
}

triangulo(1,2,2)