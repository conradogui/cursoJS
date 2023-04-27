//prototypes
function Pessoa(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome
}
Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome
const Pessoa1 = new Pessoa('Guilherme', 'Conrado')
const pessoa2 = new Pessoa('Maria', 'Joaquina')
const data = new Date