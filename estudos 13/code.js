const para = document.querySelector('.paragrafos')
const ps = para.querySelectorAll('p') //selecionei todos com a tag p

const estilos = getComputedStyle(document.body)
const bckgcb = estilos.backgroundColor

for(let p of ps) {
    p.style.backgroundColor = bckgcb
    p.style.color = 'white'
}