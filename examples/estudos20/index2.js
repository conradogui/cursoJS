function retornaHora(data) {
    if(data && !(data instanceof date)) { //se a data for enviada e não for instancia de date
        throw new TypeError('Esperando instancia de Date')
    }
    if (!data) {
        data = new Date() //gera uma data automática se não for enviada
    }
    return data.toLocaleTimeString('pt-BR', {
        hour:'2-digit', //para ter dois dígitos
        minute:'2-digit',//para ter dois dígitos
        second:'2-digit',//para ter dois dígitos
        hour12: false //para não ser de 12h e não retornar o timezone da hora PM, AM
    })
}
try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora(12)
    console.log(hora)
}catch(err) {
    //tratar erro
    //console.log(err)
} finally {
    console.log('Sempre executando')
}
