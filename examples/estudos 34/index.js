//POLIMORFISMO (reaproveitamento de métodos)
//Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}
Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo){
        console.log(`Saldo insuficiente: R$${this.saldo}`)
        return
    }
    this.saldo -= valor
    this.verSaldo()
}
Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
}

function CC(agencia, conta, saldo, limite) {//Conta Corrente
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite //O limite é definido aqui pois ele pertence a função CC
}
CC.prototype = Object.create(Conta.prototype)
CC.prototype.constructor = CC

CC.prototype.sacar = function(valor) { //reescrevi o metodo sacar nessa conta filha (CC)
    if(valor > this.saldo + this.limite){
        console.log(`Saldo insuficiente: R$${this.saldo}`)
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

function CP(agencia, conta, saldo) {//Conta Poupança
    Conta.call(this, agencia, conta, saldo)
}
CP.prototype = Object.create(Conta.prototype)
CP.prototype.constructor = CP

const cc = new CC(11, 22, 0, 100)
cc.depositar(50)
cc.sacar(100)
cc.sacar(60)
console.log(cc)

console.log()

const cp = new CP(11, 22, 0, 100)
cp.depositar(50)
cp.sacar(100)
cp.sacar(60)
console.log(cp)
