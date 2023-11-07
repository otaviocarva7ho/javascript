// Filter

// Exemplo com for

const numeros = [2, 3, 6, 5, 10]
let mult2 = []

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        mult2.push(numeros[i])
    }
}

console.log(mult2)

// Refatorando para filter

const numerosFiltrados = numeros.filter(function (numero) {
    if (numero % 2 === 0) {
        return true
    } else {
        return false
    }
})

console.log('Numeros Filtrados', numerosFiltrados)

// Map e Filter juntos

const arrayMapFilter = numeros
    .filter(numero => numero % 2 === 0)
    .map(numero => numero * 2)

  console.log('Array Map Filter', arrayMapFilter)