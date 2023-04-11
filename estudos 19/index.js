function soma(x,y){
    if( typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x and y need to be a number') //put a error on a sistem and show //in JS there is a lot of types of errors, we put the error that especify what type of error is
    }
    return x + y
}
try {
    console.log(soma(1, 2))
    console.log('1', 2)
} catch(err) {
    //console.log(err)
    console.log('something more friendly to user')
}