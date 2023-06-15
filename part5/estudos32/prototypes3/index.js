function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco
}
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
}
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)//com isso eu consigo lincar as duas funções(camiseta com produto)
    this.cor = cor
}
function Caneca(nome, preco, material) {
    Produto.call(this, nome, preco)
    this.material = material
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

Camiseta.prototype = Object.create(Produto.prototype) //com esse método consigo linkar os prototypes de Produto, com os prototypes de Camiseta
Camiseta.prototype.constructor = Camiseta


const caneca = new Caneca('Bat', 10, 'Vidro')
const produto = new Produto('Gen', 111)
const camiseta = new Camiseta('Regata', 7.5, 'preta')
camiseta.aumento(10)
console.log(produto)
console.log(camiseta)
caneca.aumento(15)
console.log(caneca)