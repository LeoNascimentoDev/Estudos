document.querySelectorAll('[pasta]').forEach(pasta =>{
    pasta.onclick = function (e){
        const ul =  pasta.nextElementSibling
        const displayStatus = ul.style.display 
        ul.style.display = displayStatus === 'none' ? 'block': 'none'
    }
}
)
