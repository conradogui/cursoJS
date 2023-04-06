const para = document.querySelector('.paragrafos')
const ps = para.querySelectorAll('p')

const estilos = getComputedStyle(document.body)
const bckgcb = estilos.backgroundColor

for(let p of ps) {
    p.style.backgroundColor = bckgcb
    p.style.color = 'white'
}