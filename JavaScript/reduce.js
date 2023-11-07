// Reduce

// Exemplo com for

const numeros = [2, 3, 6, 5, 10]
let soma = 0

for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i]
}

console.log('For normal', soma)

// Refatorando para Reduce

const somaReduce = numeros.reduce(function(valorAcumulador, valorArray) {
    return valorAcumulador + valorArray
}, 0) 

console.log('Soma Reduce', somaReduce)

// Reduce agrupamento 

const pessoas = [
    {
        nome: 'Carvalho',
        idade: 18
    },
    {
        nome: 'João',
        idade: 14
    },
    {
        nome: 'Maria',
        idade: 23
    },
    {
        nome: 'Joana',
        idade: 21
    },
    {
        nome: 'Lucas',
        idade: 32
    },
    {
        nome: 'Mateus',
        idade: 15
    },
    {
        nome: 'Isa',
        idade: 23
    },
    {
        nome: 'Luiza',
        idade: 17
    }
]

const pessoasAgrupadas = pessoas.reduce(function(valorAcumulador, valorArray) {
    const propMaiorOuMenor = valorArray.idade >= 18 ? 'maiores' : 'menores'
    
    valorAcumulador[propMaiorOuMenor].push(valorArray)

    return valorAcumulador
}, { maiores: [], menores: []})

console.log(pessoasAgrupadas)