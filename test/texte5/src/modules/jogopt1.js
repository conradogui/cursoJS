import parag from "./criadorp";

document.addEventListener('click', (e) => {
    const elementoClicado = e.target
    

    const pedrai = document.querySelector('.pedraimg')
    const papeli = document.querySelector('.pepelimg')
    const tesourai = document.querySelector('.tesouraimg')
    const divi = document.querySelector('.resultado')
    const divi1 = document.querySelector('.comput')
    const divi2 = document.querySelector('.ganhou-perdeu')

    if(elementoClicado === pedrai) {
        divi.appendChild(elementoClicado)  
    }  
    if(elementoClicado === papeli) {
        divi.appendChild(elementoClicado)        
    } 
    if(elementoClicado === tesourai) {
        divi.appendChild(elementoClicado)        
    } 

    if (elementoClicado === pedrai) {
        const elementos = [papeli, tesourai]
        const elementoAleatorio = elementos[Math.floor(Math.random() * elementos.length)]
        divi1.appendChild(elementoAleatorio)
        const p = divi2.appendChild(parag())
        if(elementoAleatorio === papeli) {
            p.innerHTML += 'Você perdeu, papel cobre a pedra!'
        } else {
            p.innerHTML += 'Você ganhou, pedra destroi tesouras!'
        }
    }
    if (elementoClicado === papeli) {
        const elementos = [pedrai, tesourai]
        const elementoAleatorio = elementos[Math.floor(Math.random() * elementos.length)]
        divi1.appendChild(elementoAleatorio)
        const p = divi2.appendChild(parag())
        if(elementoAleatorio === tesourai) {
            p.innerHTML += 'Você perdeu, tesoura corta papel!'
        } else {
            p.innerHTML += 'Você ganhou, papel cobre a pedra!'
        }
    }
    if (elementoClicado === tesourai) {
        const elementos = [papeli, pedrai]
        const elementoAleatorio = elementos[Math.floor(Math.random() * elementos.length)]
        divi1.appendChild(elementoAleatorio)
        const p = divi2.appendChild(parag())
        if(elementoAleatorio === pedrai) {
            p.innerHTML += 'Você perdeu, pedra destroi tesoura!'
        } else {
            p.innerHTML += 'Você ganhou, tesoura corta papel!'
        }
    }
})









