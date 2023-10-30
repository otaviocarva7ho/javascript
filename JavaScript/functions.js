function escreva(params) {
    console.log('Olá, Programador a Bordo!')
}

escreva()
console.log('Teste')
escreva()

function escrevaMensagem(mensagem) {
    console.log(mensagem)
}

escrevaMensagem('Hello World!')
escrevaMensagem('Carvalho Silva')

function soma(a, b) {
    return a + b
}

var resultadoSoma = soma(10, 5)
console.log(resultadoSoma)

function somaTudo(numeros) {
    var total = 0

    for (var num of numeros) {
        total = total + num
    }

    return total
}

var arrayNumeros = [ 3, 5, 7, 10, 9, 12 ]
var resultado = somaTudo(arrayNumeros)
console.log('somaTudo', resultado)

function escreverEndereco(rua, cidade, pais, ...complementos) {
    console.log(rua)
    console.log(cidade)
    console.log(pais)

    console.log(complementos)
}

escreverEndereco('Rua Programador a Bordo', 'São Paulo', 'Brasil', 'Estado de São Paulo', 'Casa xpto', 'CEP 123.123.123', 'Bloco 7')

function autoExecuta(nome) {
    console.log('Executei', nome)
}('Carvalho')

var subtraiDoisNumeros = function subtrai(a, b) {
    return a - b
}

console.log(subtraiDoisNumeros(10, 3))

var subtraiTresNumeros = function (a, b, c) {
    return a - b - c
}

console.log(subtraiTresNumeros(15, 3, 6))

function somaCallback(a, b, fnCallback) {
    return fnCallback(a + b)
}

var multiplica = function (total) {
    return total * 2
}

console.log(somaCallback(10, 3, multiplica))

console.log(somaCallback(5, 2, function (total) {
    return total + 20
}))

console.log(somaCallback(23, 11, function (total) {
    return total / 2
}))

function escreveNome(nome = 'Carvalho', idade = 18) {
    console.log(nome)
    console.log(idade)
}

escreveNome()