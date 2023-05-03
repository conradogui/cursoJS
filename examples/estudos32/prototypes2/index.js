const objA = {
    chaveA: 'A'
}
const objB = {
    chaveB: 'B'
}
const objC = new Object() 
objC.chaveC = 'C'

Object.setPrototypeOf(objB, objA) //o que seta o prototype 
Object.setPrototypeOf(objC, objB) //o que seta o prototype 
console.log(objC.chaveA)
