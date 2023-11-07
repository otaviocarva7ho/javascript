// Map

//Exemplo com for

const numeros = [2, 3, 6, 5, 10]
let novoArrayNumeros = []

for (let i = 0; i < numeros.length; i++) {
    novoArrayNumeros.push(numeros[i] * 2)
}

console.log(numeros)
console.log(novoArrayNumeros)

// Refatorando para map

const novoArrayMap = numeros.map(function (numeros) {
    return numeros * 2
})

console.log('Novo Array Map', novoArrayMap)

// Map + Arrow function + Retorno imediato

const arrayMapArrow = numeros.map(numero => numero * 2)

console.log('Array Map Arrow', arrayMapArrow)

const nomes = ['Carvalho', 'Silva', 'Teste', 'Fulano de tal']

const nomesMinusculos = nomes.map(nome => nome.toLowerCase())

console.log(nomes)
console.log(nomesMinusculos)