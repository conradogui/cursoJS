//definePropety - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome,
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, //valor
        writable: false, //pode alterar
        configurable: true //configurável -> se tiver false, eu n posso reconfigurar e nem apagar a variavel
    })
    Object.defineProperties(this, { //é basicamente igual a defineProperty, mas nessa eu posso configurar varias chaves ao mesmo tempo
        nome: {
            enumerable: true, 
            value: estoque, 
            writable: false, 
            configurable: true
        },
        preco: {
            enumerable: true, 
            value: preco, 
            writable: false, 
            configurable: true
        }
    })
}
const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 500000
console.log(p1)