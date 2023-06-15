//métodos de instancia e estáticos
class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }
    //método de instancia
    aumentarVolume() {
        this.volume += 2
    }
    diminuirVolume() {
        this.volume -= 2
    }
    //método estático
    static trocaPilha() { // so consigo acessar esse método pela clase
        console.log('troquei')
    }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log(controle1)
ControleRemoto.trocaPilha()
