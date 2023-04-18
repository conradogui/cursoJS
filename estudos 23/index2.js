//função de callback
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num) 
}
function f1(callback) { //recebe o parametro callback para ser executada quando for chamada
    setTimeout(function() {
        console.log('f1')
        if(callback) callback()//checando que callback existe
    }, rand()) //gera um numero aleatorio entre 1(1000ms) e 3(3000ms) segundos
}
function f2(callback) { //recebe o parametro callback para ser executada quando for chamada
    setTimeout(function() {
        console.log('f2')
        if(callback) callback() //checando que callback existe
    }, rand())  //gera um numero aleatorio entre 1(1000ms) e 3(3000ms) segundos       
}
function f3(callback) { //recebe o parametro callback para ser executada quando for chamada
    setTimeout(function() {
        console.log('f3')
        if(callback) callback()//checando que callback existe
    }, rand()) //gera um numero aleatorio entre 1(1000ms) e 3(3000ms) segundos
}
f1(f1callback) //chamei primeiro o f1 pois ele é o primeiro a ser executado
function f1callback() {
    f2(f2callback) //cada função vai chamando outra para que seja na ordem
}
function f2callback() {
    f3(f3callback) //cada função vai chamando outra para que seja na ordem
}
function f3callback() {
    console.log('Olá mundo')
}