function criaPessoa(nome, sobrenome, p, a) {
    return {
        nome,
        sobrenome,
        peso: p,
        altura: a,
        fala(assunto) {
            return `${nome} ${sobrenome} fala sobre ${assunto}`
        },
        get imc() {
            const dados = this.peso / (this.altura ** 2)
            return dados.toFixed(1)           
        }
    }
}
const p1 = criaPessoa('Guilherme', 'Conrado', 65, 1.75)
console.log(p1.fala('Macacos'))
console.log(p1.imc)