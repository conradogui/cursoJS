/*
let i = 0

while (i <= 10) {
    console.log(i)
    i++
} //vai de 0 a 10
*/
function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const min = 1
const max = 50
let rand = random(min, max)

while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
} //executa varias vezes aleatoriamente até encontrar o 10, quando encontra 10 ele para.