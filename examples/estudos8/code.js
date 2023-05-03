/*
const resp = document.querySelector('.container')
const data = new Date()
const diaDaSemana = data.getDay()

switch (diaDaSemana) {
    case 0:
        resp.innerHTML = 'Domingo'
        break;
        case 1:
        resp.innerHTML = 'Segunda-feira'
        break;
        case 2:
        resp.innerHTML = 'Terça-feira'
        break;
        case 3:
        resp.innerHTML = 'Quarta-feira'
        break;
        case 4:
        resp.innerHTML = 'Quinta-feira'
        break;
        case 5:
        resp.innerHTML = 'Sexta-feira'
        break;
        case 6:
        resp.innerHTML = 'Sabado'
        break;
    default:
        resp.innerHTML = ''
        break;
}

const diaMes = data.getMonth()
const diaa = data.getDate()
resp.innerHTML += `, ${diaa} de `

switch (diaMes) {
    case 0:
        resp.innerHTML += 'Janeiro'
        break;
        case 1:
        resp.innerHTML += 'Fevereiro'
        break;
        case 2:
        resp.innerHTML += 'Março'
        break;
        case 3:
        resp.innerHTML += 'Abril'
        break;
        case 4:
        resp.innerHTML += 'Maio'
        break;
        case 5:
        resp.innerHTML += 'Junho'
        break;
        case 6:
        resp.innerHTML += 'Julho'
        break;
        case 7:
        resp.innerHTML += 'Agosto'
        break;
        case 8:
        resp.innerHTML += 'Setembro'
        break;
        case 9:
        resp.innerHTML += 'Outubro'
        break;
        case 10:
        resp.innerHTML += 'Novembro'
        break;
        case 11:
        resp.innerHTML += 'Dezembro'
        break;
    default:
        resp.innerHTML += 'Data inválida'
        break;
}
const ye = data.getFullYear()
const h = data.getHours()
const min = data.getMinutes()
resp.innerHTML += ` de ${ye} ${h}:${min}`
*/
const resp = document.querySelector('.container')
const data = new Date()
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
}

resp.innerHTML = data.toLocaleString('pt-br', opcoes)




