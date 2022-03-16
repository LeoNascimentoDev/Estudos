// fórmula de bhaskara

 function bhaskara (a,b,c) {
    let delta = b*b-4*a*c
    let raiz1
    let raiz2
    let resultado = []
    if (delta <0){
       
        console.log("o delta é negativo e vale "+ delta)

    }
    else{
        raiz1 = (-b-Math.sqrt(delta))/(2*a)
         raiz2 = (-b+Math.sqrt(delta))/(2*a)
         resultado.push(raiz1,raiz2)
    }
   
    
   return resultado
}

console.log(bhaskara(1,55,4))
