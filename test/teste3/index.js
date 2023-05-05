function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}
Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual/100))
}
Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual/100))
}
const p1 = new Produto('Camiseta', 20)
p1.aumento(20)
p1.desconto(50)
console.log(p1)