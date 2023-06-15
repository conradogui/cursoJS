//Herança com classes
class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = true
    }
    ligar() {
        if(this.ligado){
            console.log(`${this.nome} já está ligado`)
            return
        }
        this.ligado = true
    }
    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já está desligado`)
            return
        }
        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico { //com isso eu copio toda a função construtora para Smartphone (que acaba se tornando outra construtora)
    constructor(nome, cor) {
        super(nome) //chamando a class pai e passando os parametros que ela recebe (no caso é so nome). Dessa maneira, tudo que estiver na construtora pai(DispositivoEletronico) vai ser copiado
        this.cor = cor //to adicionando mais coisa nele
    }
    ligar() { // aqui estou sobreescrevendo um método da função pai, essa funcionará como herança
        console.log(`Aparelho já ligado`)
    }
}
const s1 = new Smartphone('iphone', 'preto')
s1.ligar()
console.log(s1)