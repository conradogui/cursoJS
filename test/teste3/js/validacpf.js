class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable:true,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }
    valida() {
        if(!this.cpfLimpo) return false
        if(this.cpfLimpo.length !== 11) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.isSequencia()) return false
        this.criaNovoCpf()
        return this.novoCpf === this.cpfLimpo
    }
    criaNovoCpf() {
        const cpfSemDigito = this.cpfLimpo.slice(0,-2)
        const digito1 = this.criaDigito(cpfSemDigito)
        const digito2 = this.criaDigito(cpfSemDigito + digito1)
        this.novoCpf = cpfSemDigito + digito1 + digito2
    }
    criaDigito(cpfSemDigito) {
        let total = 0
        let regressivo = cpfSemDigito.length + 1

        for(let num of cpfSemDigito) {
            total += regressivo * Number(num)
            regressivo--
        }
        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : '0'
        
    }
    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }
}


// const cpf = new ValidaCpf('070.987.720-03')
// // console.log(cpf)

// if(cpf.valida()) {
//     console.log( 'CPF válido')
// } else {
//     console.log( 'CPF inválido')
// }