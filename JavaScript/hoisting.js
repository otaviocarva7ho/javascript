// Hoisting

console.log(a)
var a = 123
console.log(a)

// console.log(add)
// let ddd = 16

// console.log(idade)
// const idade = 18

// console.log(soma(10, 5))
// let soma = function (params) {
//  return a + b
// }

console.log(soma(10, 5))
function soma(a, b) {
    return a + b
}

function testaHoisting(params) {
    console.log('testaHoisting', aaa)
    var aaa = 123
}

testaHoisting()

function calcula(params) {
    return geraResutado()

    /*
        muita lógica de código aqui...
    */

    function soma(a, b) {
        return a + b
    }

    function geraResutado(params) {
        return soma(10, 5) / 3
    }
}

console.log(calcula())