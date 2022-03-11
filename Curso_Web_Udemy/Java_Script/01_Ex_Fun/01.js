
function contas (a,b)
{
    let res =[]
    let nomes =['Soma','Sub','Div','Multi']
    res[0]=a+b
    res[1]=a-b
    res[2]=a/b
    res[3]=a*b
          
        for (let i in nomes)
        {
        console.log(i + ' ' +  nomes[i]+ ' ' + res[i])
        }

    }

contas(3,3)
