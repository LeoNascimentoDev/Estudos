let pxx =200
let max =500
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n);
    });
}

async function principal(){
    pxx +=10
    console.log(pxx)

    await delay(300);

    if(pxx<max)
    (
        principal()
    )
  

}

principal()
