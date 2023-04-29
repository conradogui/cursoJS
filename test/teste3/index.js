//Factory function 
function criaAviao(nome, empressa) {
    return {
        nome,
        empressa,
        get nomeCompleto() {
            return `${this.nome} é um aviao grande`
        }
    }
}
const a1 = criaAviao('A380', 'Emirates')
console.log(a1)
//Constructor function
function CriaAv(nome, empressa) {
    this.nome = nome ,
    this.empressa = empressa
}

const av2 = new CriaAv('B777', 'KLM')
console.log(av2)