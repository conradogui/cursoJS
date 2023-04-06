const form = document.querySelector('.formulario') // primeiro capturei o formulario

form.addEventListener('submit', function (e) { // adicionei um escutador de evento(submit) no formulário
    e.preventDefault() //seguido do prenventdefault, assim eu não deixo o formulário ser enviado
    const inputPeso = e.target.querySelector('#peso') //capturei os dados dos inputs
    const inputAltura = e.target.querySelector('#altura') //capturei os dados dos inputs

    const peso = Number(inputPeso.value)  //transformei em numero
    const altura = Number(inputAltura.value) //transformei em numero

    if (!peso) { //se nesse caso o peso for invalido (se não(!) for peso(peso)) retorna o codigo a baixo
        setResultado('Peso invalido', false)
        return
    }
    if (!altura) { // se nesse caso a altura for invalida (se não(!) for altura(altura)) retorna o codigo a baixo
        setResultado('Altura inválida', false)
        return
    }

    const imc = getImc(peso, altura) //criei uma função específica para calacular o imc
    const nivelImc = getNivelImc(imc) //peguei o nível do imc

    const msg = `Seu IMC é ${imc} (${nivelImc})` //mensagem que irá aparecer

    setResultado(msg, true) //usando agora a flag true

    
})
function getNivelImc (imc) { //aqui eu chequei o nivel do imc a partir do imc que eu recebi
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'] // criei um array com os níveis
        
    /* posso fazer dessa maneira, mas para diminuir o codigo, vou fazer do jeito a baixo...
    if(imc >= 39.9) { 
        return nivel[5]
    }else if (imc >= 34.9) {
        return nivel[4]
    }else if (imc >= 29.9) {
        return nivel[3]
    }else if (imc >= 24.9) {
        return nivel[2]
    }else if (imc >= 18.5) {
        return nivel[1]
    }else if (imc < 18.5) {
        return nivel[0]
    }
    */

    if(imc >= 39.9) return nivel[5]  //chequei de tras para frente
    if (imc >= 34.9) return nivel[4] //chequei de tras para frente
    if (imc >= 29.9) return nivel[3] //chequei de tras para frente
    if (imc >= 24.9) return nivel[2] //chequei de tras para frente
    if (imc >= 18.5) return nivel[1] //chequei de tras para frente
    if (imc < 18.5) return nivel[0] //chequei de tras para frente

}

function getImc (peso, altura) { // aqui fez o calculo do imc
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

function criaP () { //função so cria o parágrafo
    const p = document.createElement('p')
    return p
}

function setResultado(msg, isValid) { // função indica o resultado, ela recebe a mensagem (msg) e se o resultado é válido(isValid)
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '' //zera o html do resultado
  
    const p = criaP() //cria um parágrafo com a função de criar paragrafo

    if (isValid) { //checa se foi enviada como verdadeira ou falsa
        p.classList.add('paragrafo-resultado') //adicionei uma class usando p.classList.add e modifiquei no css para ficar com fundo verde caso for verdade
    } else {
        p.classList.add('bad') //adicionei uma class usando p.classList.add e modifiquei no css para ficar com fundo vermelho caso for verdade
    }
    p.innerHTML = msg //aqui digo a mensagem para o innerHTML dentro do paragrafo criado
    resultado.appendChild(p) //adiciona a mensagem no resultado com o appendChild
}