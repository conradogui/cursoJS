class ValidaCPF {
    constructor (cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }
    valida () {
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.isSequencia()) return false
        if(!this.geraNovoCpf()) return false
        return 'certo'
    }
    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }
    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, -2)
        const digito1 = this.geraDigito(cpfParcial)
        const digito2 = this.geraDigito(cpfParcial + digito1)
    }
    geraDigito(cpfParcial) {
        let total = 0
        let reverso = cpfParcial.length + 1

        for(let numeros of cpfParcial) {
            total+=rever            
        }
    }
}
let validacpf = new ValidaCPF('070.987.720-03')
// validacpf = new ValidaCPF('999.999.999-99')

console.log(validacpf.valida())