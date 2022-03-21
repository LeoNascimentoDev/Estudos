
const color = {

    p:'#388e3c',
    div:'#156490',
    span:'#e53935',
    section:'#AABB3c',
    ul:'#A89900',
    ol:'#C55e3c',
    header:'#C88e3c',
    nav:'#A889',
    main:'#388eac',
    footer:'#385e3c',
    form: '#9f6581',
    body: '#2686',

    get(tagName)
    {
        return this[tagName] ? this[tagName] : this.body
    }


}

document.querySelectorAll('.tag').forEach(tag => {
    const tag_name = tag.tagName.toLowerCase()

    tag.style.borderColor = '#990000'
    tag.style.backgroundColor = color.get(tag_name)

    if (!tag.classList.contains('no_label')) {
        const label = document.createElement('label')
        label.style.backgroundColor = '#444'
        label.style.padding = "2px 5px 6px 5px"
        label.innerText = tag_name
        label.style.fontSize = "20px"
        label.style.verticalAlign = "top"
        label.style.color = "#999"
        label.style.margin = "4px"

        tag.insertBefore(label,tag.childNodes[0])
    }
});