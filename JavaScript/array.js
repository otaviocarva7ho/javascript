var numeros = [5, 3, 12, 17, 10, 99]
console.log(numeros)

console.log(numeros[2])
console.log(numeros[5])
console.log(numeros[0])

console.log(numeros.length)

var numeroRetornado = numeros.pop()
console.log('numero retornado', numeroRetornado)
console.log(numeros)

console.log(numeros.slice(2, 5))
console.log(numeros.slice(3))

console.log(numeros.join(' '))

var usuario = ['Carvalho', 18, 'Programador a Bordo', 2023, 'Brasileiro']
console.log(usuario)

usuario.push('SP')
console.log(usuario)

console.log(usuario.includes('Brasileiro'))
console.log(usuario.includes('Japones'))
console.log(usuario.includes(2023))

console.log(usuario.indexOf(2023))
console.log(usuario.indexOf(2019))

var arr1 = [3, 2, 1]
var arr2 = ['Programador', 'a', 'Bordo']

// var resultado = arr1.concat(arr2).concat(['teste', 'fulano', 'ciclano'])
var resultado = arr1.concat(arr2, ['teste', 'fulano', 'ciclano'])
console.log(resultado)

console.log([... arr1, ... arr2])

var nome = usuario[0]

var idade = usuario[1]

var ano = usuario[3]

console.log(nome, idade, ano)

var [ nome, idade, , ano, nacionalidade ] = usuario
console.log(nome, idade, ano, nacionalidade)