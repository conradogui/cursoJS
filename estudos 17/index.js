function ePaisagem(largura, altura) {
    if(largura > altura) {
        console.log('Está em modo paisagem')
        return true
    } else {
        console.log('Está em modo retrato')
        return false
    }
}
console.log(ePaisagem(30,10))
