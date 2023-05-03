//funções recursivas
function recursiva(max) {
    if(max >= 10) return
    max++
    console.log(max)
    recursiva(max)
}
recursiva(0)//ele percorre de 1 até 10