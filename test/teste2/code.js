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
    contagemRegressiva = 4
}

//realizando o jogo (X e O) e mudando a vez
let estadoAtual = true
const botoes = document.querySelectorAll('.btn')
botoes.forEach(botao => {
  botao.addEventListener('click', e => {
    estadoAtual = !estadoAtual
    if (estadoAtual) {
      botao.textContent = 'X'
      vez.innerHTML = `Vez de ${primeiro[0]}`
      verificarGanhador1()
      verificarGanhador2()
      verificarGanhador3()
      verificarGanhador7()
      verificarGanhador8()
      verificarGanhador9()
      diagonal1()
      diagonal3()
    } else {
      botao.textContent = 'O'
      vez.innerHTML = `Vez de ${primeiro[1]}`
      verificarGanhador4()
      verificarGanhador5()
      verificarGanhador6()
      verificarGanhador10()
      verificarGanhador11()
      verificarGanhador12()
      diagonal2()
      diagonal4()

    }
  })
})

//definindo ganhadores
const ganhador = document.querySelector('.ganhou')
const bot1 = document.querySelector('.x1')
const bot2 = document.querySelector('.x2')
const bot3 = document.querySelector('.x3')
const bot4 = document.querySelector('.y1')
const bot5 = document.querySelector('.y2')
const bot6 = document.querySelector('.y3')
const bot7 = document.querySelector('.z1')
const bot8 = document.querySelector('.z2')
const bot9 = document.querySelector('.z3')

function verificarGanhador1() {
    if (bot1.textContent === 'X' && bot2.textContent === 'X' && bot3.textContent === 'X') {
      ganhador.textContent = 'Jogo finalizado'
    }
  }
  function verificarGanhador2() {
    if (bot4.textContent === 'X' && bot5.textContent === 'X' && bot6.textContent === 'X') {
      ganhador.textContent = 'Jogo finalizado'
    }
  }
  function verificarGanhador3() {
    if (bot7.textContent === 'X' && bot8.textContent === 'X' && bot9.textContent === 'X') {
      ganhador.textContent = 'Jogo finalizado'
    }
  }
  function verificarGanhador4() {
    if (bot1.textContent === 'O' && bot2.textContent === 'O' && bot3.textContent === 'O') {
      ganhador.textContent = 'Jogo finalizado'
    }
  }
  function verificarGanhador5() {
    if (bot4.textContent === 'O' && bot5.textContent === 'O' && bot6.textContent === 'O') {
      ganhador.textContent = 'Jogo finalizado'
    }
  }
  function verificarGanhador6() {
    if (bot7.textContent === 'O' && bot8.textContent === 'O' && bot9.textContent === 'O') {
      ganhador.textContent = 'Jogo finalizado'
    }
  }
  function verificarGanhador7() {
    if (bot1.textContent === 'X' && bot4.textContent === 'X' && bot7.textContent === 'X') {
      ganhador.textContent = 'Jogo finalizado'
    }
  }
  function verificarGanhador8() {
    if (bot2.textContent === 'X' && bot5.textContent === 'X' && bot8.textContent === 'X') {
      ganhador.textContent = 'Jogo finalizado'
    }
  }
  function verificarGanhador9() {
    if (bot3.textContent === 'X' && bot6.textContent === 'X' && bot9.textContent === 'X') {
      ganhador.textContent = 'Jogo finalizado'
    }
  }
  function verificarGanhador10() {
    if (bot1.textContent === 'O' && bot4.textContent === 'O' && bot7.textContent === 'O') {
      ganhador.textContent = 'Jogo finalizado'
    }
  }
  function verificarGanhador11() {
    if (bot2.textContent === 'O' && bot5.textContent === 'O' && bot8.textContent === 'O') {
      ganhador.textContent = 'Jogo finalizado'
    }
  }
  function verificarGanhador12() {
    if (bot3.textContent === 'O' && bot6.textContent === 'O' && bot9.textContent === 'O') {
      ganhador.textContent = 'Jogo finalizado'
    }
  }
  function diagonal1() {
    if (bot1.textContent === 'X' && bot5.textContent === 'X' && bot9.textContent === 'X') {
      ganhador.textContent = 'Jogo finalizado'
    }
  }
  function diagonal2() {
    if (bot1.textContent === 'O' && bot5.textContent === 'O' && bot9.textContent === 'O') {
      ganhador.textContent = 'Jogo finalizado'
    }
  }
  function diagonal3() {
    if (bot3.textContent === 'X' && bot5.textContent === 'X' && bot7.textContent === 'X') {
      ganhador.textContent = 'Jogo finalizado'
    }
  }
  function diagonal4() {
    if (bot3.textContent === 'O' && bot5.textContent === 'O' && bot7.textContent === 'O') {
      ganhador.textContent = 'Jogo finalizado'
    }
  }







