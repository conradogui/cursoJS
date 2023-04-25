//concatenação de arrays
const a1 = [0,1,2]
const a2 = [3,4,5]
//const a3 = a1.concat(a2, [7, 8, 9], 'Gui')
const a3 = [...a1,'gui',...a2,...[9,8,7]]
console.log(a3)