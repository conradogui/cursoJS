class ValidaCPF {
    constructor (cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, '') //expressão regular para retirar tudo que não é numero
        })
    }
    valida () {
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.isSequencia()) return false
        this.geraNovoCpf()
        return this.novoCPF === this.cpfLimpo
    }
    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }
    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, -2)
        const digito1 = this.geraDigito(cpfParcial)
        const digito2 = this.geraDigito(cpfParcial + digito1)
        this.novoCPF = cpfParcial + digito1 + digito2 //aqui não estou somando e sim concatenando, pois digito 1 e digito 2 sao strings
    }
    geraDigito(cpfParcial) {
        let total = 0
        let reverso = cpfParcial.length + 1

        for(let numeros of cpfParcial) {
            total += reverso * Number(numeros)
            reverso--           
        }
        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : '0'
    }
}
// let validacpf = new ValidaCPF('070.987.720-03')
// // validacpf = new ValidaCPF('999.999.999-99')

// if(validacpf.valida()) {
//     console.log( 'CPF válido')
// } else {
//     console.log( 'CPF inválido')
// }