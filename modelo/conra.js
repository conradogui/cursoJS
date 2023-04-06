const form = document.querySelector('.formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const byPeso = document.querySelector('#peso')
    const byAltura = document.querySelector('#altura')

    const peso = Number(byPeso.value)
    const altura = Number(byAltura.value)

    if(!peso) {
        funResul('Peso inválido!', false)
        return
    }
    if (!altura) {
        funResul('Altura inválida', false)
        return
    }
    

    const imc = vaiImc(peso, altura)
    const grauImc = grauDoImc(imc)
    const msg = `O seu imc é ${imc} e o nivel é: ${grauImc}`

    funResul(msg, true)

    if(imc < 18.5) {
        funResul(msg + " (Cuidado, IMC baixo!)", false)
        return
    }
    if(imc > 24.9) {
        funResul(msg + " (Cuidado, IMC alto!)", false)
        return
    }
})

function criaP () {
    const p = document.createElement('p')
    return p
} 

function vaiImc (peso, altura) {
    const calculo = peso / altura ** 2
    return calculo.toFixed(2)
}

function grauDoImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if(imc >= 39.9) return nivel[5]  
    if (imc >= 34.9) return nivel[4] 
    if (imc >= 29.9) return nivel[3] 
    if (imc >= 24.9) return nivel[2] 
    if (imc >= 18.5) return nivel[1] 
    if (imc < 18.5) return nivel[0] 
}
function funResul (msg, eValido) {
    const resultado = document.querySelector('#resultado')

    const p = criaP()
    resultado.innerHTML = ''
    
    if(eValido) {
        p.classList.add('grin')
    } else {
        p.classList.add('red')
    }

    p.innerHTML = msg
    resultado.appendChild(p)

}