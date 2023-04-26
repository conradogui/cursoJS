//constructor functions
class Pessoa {
    constructor(nome, sobrenome) {
        //esses sao atributos privados pois são ultilizados somente dentro da constructor function
        const ID = 12345
        const metodoInterno = () => {
            bla
        }
        //quando uso a palavra this, são considerados metodos publicos, pois posso acesar fora da função
        this.nome = nome
        this.sobrenome = sobrenome
        this.metodo = () => {
            console.log(`${this.nome} é um método`)
        }
    }
}
const p1 = new Pessoa('Guilherme', 'Conrado')
console.log(p1.metodo())