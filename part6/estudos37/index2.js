//getter e setter com classes
const velocidadeM = Symbol('velocidade') // a cada vez que o symbol ser chamado, ele gera um ID aleatório. Um symbol nunca vai ser igual a outro
class Carro {
    constructor(nome) {
        this.nome = nome
        this[velocidadeM] = 0 //em todos os locais que chamei velocidadeM, vou ter que botar os colchetes[] e a _velocidade
    }
    set velocidade(valor) { //vou setar o valor e vou fazer as devidas alterações nele 
        if(typeof valor !== "number") return
        if(valor >= 100 || valor <= 0) return
        this[velocidadeM] = valor //em todos os locais que chamei velocidadeM, vou ter que botar os colchetes[] e a _velocidade
    }
    get velocidade() {
        return this[velocidadeM] //para retornar a velocidade real, mesmo quando alguem quiser alterar
    }
    acelerar() {
        if(this[velocidadeM] >= 100) return //em todos os locais que chamei velocidadeM, vou ter que botar os colchetes[] e a _velocidade
        this[velocidadeM]++ //em todos os locais que chamei velocidadeM, vou ter que botar os colchetes[] e a _velocidade
    }

    freiar() {
        if(this[velocidadeM] <= 0) return //em todos os locais que chamei velocidadeM, vou ter que botar os colchetes[] e a _velocidade
        this[velocidadeM]-- //em todos os locais que chamei velocidadeM, vou ter que botar os colchetes[] e a _velocidade
    }
}
const c1 = new Carro('fusca')

for(let i = 0; i <= 200; i++) {
    c1.acelerar()
}
c1.velocidade = 2000 //usei o setter aqui(essa é a função dele)

console.log(c1.velocidade)//aqui usei o getter