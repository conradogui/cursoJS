// promisses

function espera(msg, tmp) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('não é string')
        setTimeout(() => {
            resolve(msg)
        }, tmp)
    })
}
function randon(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

espera('primeiro passo', randon(1000, 3000)).then(resp => {
    console.log(resp)
    return espera('segundo passo', randon(1000, 3000))
})
.then(resp => {
    console.log(resp)
    return espera('passo 3', randon(1000, 3000))
})
.then(resp => {
    console.log(resp)
    return espera('passo 4', randon(1000, 3000))
})
.then(resp => {
    console.log(resp)
    return espera('passo 5', randon(1000, 3000))
})
.then(resp => {
    console.log(resp)
}) 
.catch(e => {
    console.log(e)
})

