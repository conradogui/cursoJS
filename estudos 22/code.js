const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const zerar = document.querySelector('.zerar')
const pausar = document.querySelector('.pausar')

function horaZero() {
    let hora = new Date('00:00:00')
    return hora.toTimeString()
}

iniciar.addEventListener('click', function(event) {
    setInterval( function() {
    relogio.innerHTML = (horaZero())
}, 1000)
})
zerar.addEventListener('click', function(event) {
    alert('d')
})
pausar.addEventListener('click', function(event) {
    alert('d')
})
