function rerebe (x) {
    if (x % 5 == 0 && x % 3 == 0) { // essa função deve vir primeiro pois ela checa duas coisas ao mesmo tempo que devem ser checadas antes
        return 'FizzBuzz'
    } else if(x % 3 == 0) {
        return 'Fizz'        
    } else if(x % 5 == 0) {
        return 'Buzz'
    } else if (x % 3 > 0 && x % 5 > 0 || x == undefined) {
        return x
    }
}
for (let i = 0; i <= 100; i++) {
    console.log(i, rerebe(i))
}