let segundos = 0
let timer 

function horaParada() {
    let data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timezone:'UTC'
    })
}
function comecaRel() {
    timer = setInterval(function () {

    }, 1000)
}

