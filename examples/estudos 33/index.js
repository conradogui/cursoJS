//VALIDADOR DE CPF
//705.484.450-52
//070.987.720-03
function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false //se o cpf não for enviado retorna falso
    if(this.cpfLimpo.length !== 11 ) return false //se o cpf for maior que 11 retorna falso
    if(this.isSequencia()) return false
    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)
    const novoCpf = cpfParcial + digito1 + digito2
    console.log(novoCpf)
    return novoCpf === this.cpfLimpo
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial)
    let regressivo = cpfArray.length + 1
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val))
        regressivo--
        return ac //tenho que retornar o acumulador, se não vou terminar com ele undefined
    }, 0)//acumulador começa de zero

    const digito = 11 - (total % 11) //conta para conseguir o primeiro digito do cpf
    return digito > 9 ? '0' : String(digito) //se isso acontecer ? verdade : falso //// aqui ja retorna uma string pois não vou mais fazer conta
}
ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}

const cpf = new ValidaCPF('070.987.720-03')
if(cpf.valida()) {
    console.log('Cpf válido')
} else {
    console.log('Cpf inválido')
}