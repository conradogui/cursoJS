//dando desconto
function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco
}
//Tais funções estão no prototype de Produto
Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual/100))
}
//Tais funções estão no prototype de Produto
Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual/100))
}

const p1 = new Produto('Camiseta', 20)

//object literal
const p2 = {
    nome: 'Caneco',
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype)

//criei o objeto, defini quem vai ser o prototype(pai) dele e configurei as chaves as chaves 
const p3 = Object.create(Produto.prototype, { 
    preco: {
        writable:true ,
        configurable:true ,
        enumerable: true ,
        value: 99
    },
    tamanho: {
        writable:true ,
        configurable:true ,
        enumerable: true ,
        value: 42
    }
})
p3.aumento(15)
console.log(p3)
p2.desconto(10)
console.log(p2)
p1.aumento(100)
console.log(p1)
