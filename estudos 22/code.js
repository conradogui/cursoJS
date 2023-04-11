const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const zerar = document.querySelector('.zerar')
const pausar = document.querySelector('.pausar')
let segundos = 0 //marco zero para fazer a contagem e oque mantém todas funções dos eventos
let timer

function horaZero(segundos) { //o que eu vou contar é os segundos, logo fiz essa função para conseguir o formato de hora
    let hora = new Date(segundos * 1000) //multipliquei por 1000 pois o JS recebe em milésimos de segundo, multiplicando por 1000 vou ter o valor em segundos
    return hora.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone:'UTC' //para tirar o 21 da frente e especificar que a data é 01-01-1970 ás 00:00 e os segundos que mandei
    }) 
}
function iniciaRelogio() {
    timer = setInterval( function() {
    segundos++ //soma um segundo a cada segundo
    relogio.innerHTML = horaZero(segundos) //a cada momento que eu chamar a função, ela vai formatar em formato de horário
}, 1000)
}
document.addEventListener('click', function(e) { //forma bem mais simples de reduzir o código
    const el = e.target //onde eu clicar, vai ser o evento
    if(el.classList.contains('zerar')) { //se contém zerar faça isso...
        relogio.classList.remove('pausado')
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        segundos = 0
    }
    if(el.classList.contains('pausar')) { //se contem pausar faça isso...
        relogio.classList.add('pausado')
        clearInterval(timer)
    }
    if(el.classList.contains('iniciar')) { //se contem iniciar faça isso...
        relogio.classList.remove('pausado')
        clearInterval(timer)
        iniciaRelogio()
    }
})
/*
iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado')
    clearInterval(timer)
    iniciaRelogio()
})
pausar.addEventListener('click', function(event) {
    relogio.classList.add('pausado')
    clearInterval(timer)
})
zerar.addEventListener('click', function(event) {
    relogio.classList.add('pausado')
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    segundos = 0
})
*/



