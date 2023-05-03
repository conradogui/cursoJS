//defineProperty -> get e set
function Produto(nome, preco, estoque) {
    this.nome = nome,
    this.preco = preco

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: true,
        get: function() { //get so obtem o valor
            return estoquePrivado
        },
        set: function(valor) { //set seta o valor
            if(typeof valor !== 'number') {
                throw new TypeError('deu erro em algo')
            }
            estoquePrivado = valor
        } 

    })
}
const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 8
console.log(p1)
console.log(p1.estoque)