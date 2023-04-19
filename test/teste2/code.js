const jogador1 = document.querySelector('.joga1')
const jogador2 = document.querySelector('.joga2')
const comecar = document.querySelector('.comecar')
const vez = document.querySelector('.vez')
let primeiro = []
//primeira coisa
function salvandoComacando() {
    comecar.addEventListener('click', function () {
        adicionaNome1()
        adicionaNome2()
        apagaNomes()
        timer()
    } )
    function adicionaNome1() {
        primeiro.push(jogador1.value)
        return
    }
    function adicionaNome2() {
        primeiro.push(jogador2.value)
        return
    }
    function apagaNomes() {
        jogador1.value = ''
        jogador2.value = ''
        return
    }
}
salvandoComacando()
//segunda coisa (timer)
let contagemRegressiva = 4
function timer() {
    const intervalo = setInterval(() => {
    contagemRegressiva--
    vez.innerHTML = contagemRegressiva
    if (contagemRegressiva === 0) {
        clearInterval(intervalo)
        vez.innerHTML = `Vez de ${primeiro[0]}`
    }
    }, 1000)
}


