// função que retorna a divisão e o resto recebendo dois valores


let x = function div (dividendo, divisor){
    let a = dividendo/divisor
    let b = dividendo % divisor
    return [a,b]
}


console.log(' os valores são: ' + x(10,3))
console.log(' os valores são: ' + x(10,3)[0] + ' e ' + x(10,3)[1])
console.log(` os valores são: ${x(10,3)[1]}`)                           // utilizando a crase pode-se contatenar funções ou operações no corpo usitlizando ${}



// com arrow function

let z = (a,b) => a/b

console.log(z(10,5))
