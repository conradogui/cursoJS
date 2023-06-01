//capturando evento de click e colocando a imagem na div
export default document.addEventListener('click', (e) => {
    const elementoClicado = e.target
    

    const pedrai = document.querySelector('.pedraimg')
    const papeli = document.querySelector('.pepelimg')
    const tesourai = document.querySelector('.tesouraimg')
    const divi = document.querySelector('.resultado')

    if(elementoClicado === pedrai) {
        divi.appendChild(elementoClicado) 
        comput()     
    }  
    if(elementoClicado === papeli) {
        divi.appendChild(elementoClicado)        
    } 
    if(elementoClicado === tesourai) {
        divi.appendChild(elementoClicado)        
    } 
    
})

const rand = (max, min) => Math.floor(Math.random() * (max - min) + min)

function comput () {
    const objetos = document.querySelector('.objetos')
    for(let i = 0; i.length; i++) {
        i = objetos.rand(0, 3)
    }
}


