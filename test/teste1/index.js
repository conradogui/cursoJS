const form = document.querySelector('.formulario')

form.addEventListener('submit', e => {
    e.preventDefault()

    const pesoStr = document.querySelector('#peso')
    const alturaStr = document.querySelector('#altura')
    const divResu = document.querySelector('#resultado')

    const peso = Number(pesoStr.value)
    const altura = Number(alturaStr.value)


    const imc = calculaImc(peso, altura)
    const grau = grauImc(imc)
    const resposta = `Seu imc é ${imc} e está com ${grau}`
    
    if(!peso || !altura) {
        divResu.innerHTML = `Formulario invalido`
    } else {
        divResu.innerHTML = resposta
    }


})

function calculaImc(peso, altura) {
    const resu = peso / altura ** 2
    return resu.toFixed(2)
}

function grauImc(imc) {
    const grau = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3',]
    if(imc < 18.50) return grau[0]
    if(imc < 24.90 && imc > 18.50) return grau[1]
    if(imc < 29.90 && imc > 25) return grau[2]
    if(imc < 34.90 && imc > 30) return grau[3]
    if(imc < 39.9 && imc > 35) return grau[4]
    if(imc < 18.50) return grau[5]
}
