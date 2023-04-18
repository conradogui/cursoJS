//Factory function
function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome:nome,
        sobrenome: sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor) {
            valor = valor.split(' ')            
            this.nome = valor.shift()
            console.log(valor)
        },
        fala(assunto) {
            return `${this.nome} está falando sobre ${assunto}`
        },
        peso:peso,
        altura:altura,
        //getter (usso isso para transformar essa função dentro do objeto em objeto mesmo, dessa forma, posso chamar ele fora da função, como se fosse um objeto normal)
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Guilherme', 'Conrado', 70, 1.75)
console.log(p1.fala('Java'))
console.log(p1.imc)
p1.nomeCompleto = 'Joao Eugenio Oliveira'
console.log(p1.nomeCompleto)
