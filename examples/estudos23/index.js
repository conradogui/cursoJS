//argumentos que sustenta todos os argumentos enviados
//o método a baixo so funciona para function normais, não funciona em arrow funcions
function funcao(a, b, c) {
    let total = 0
    for(let argumento of arguments) { //arguments são os argumentos declarados
        total += argumento
    }
    console.log(total, a, b, c) //28 (total) 1 2 3 (a, b, c)
}
funcao(1, 2, 3, 4, 5, 6, 7) //posso mandar um parametro aqui mesmo que a função mesmo não tenha, assim, vou ter que usar arguments para reaalizar a função

function funcaoDois(a, b = 0, c = 0) {
    console.log(a + b + c)
}
funcaoDois(2) //se os outros valores não forem enviados quando chamo a função, ele assume os valores de quando declarei ela, que no caso b e c são 0

function conta (operador, acumulador, ...numeros) { //uso o 'resto' (...) para definir que numeros é todo o resto. Ele sempre tem que ser o ultimo
    for(let numero of numeros) {
        acumulador += numero
    }
    console.log(acumulador) //140
}
conta('+', 0, 20, 30, 40, 50)