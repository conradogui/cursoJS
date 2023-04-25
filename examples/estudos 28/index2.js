//funções geradoras
function* geradora1() {
    //codigo qualquer
    yield 'Valor 1'
    //codigo qualquer
    yield 'Valor 2'
    //codigo qualquer
    yield 'Valor 3'
}
const g1 = geradora1()
console.log(g1.next().value)
//a cada vez que ela é chamada, ela me entrega o proximo valor
//quando uso o return, ele não passa para a proxima iteração
function* geradora2() {
    yield 'Contar 1'
    yield 'Contar 2'
    yield 'Contar 3'
}
function* geradora3() {
    yield* geradora2()//uso o yield com asterisco para realizar a continuação da função geradora2
    yield 'Contar 4'
    yield 'Contar 5'
    yield 'Contar 6'
}
const g3 = geradora3()
console.log(g3.next().value)
console.log(g3.next().value)
console.log(g3.next().value)
console.log(g3.next().value)
console.log(g3.next().value)
console.log(g3.next().value)