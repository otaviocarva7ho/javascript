// closures

function imprimeNome(params) {
    let nome = 'Carvalho'
    return function (params) {
        return nome
    }
}

var func = imprimeNome()
console.log(func())
console.log(func())
console.log(func())
console.log(func())

// function e variaves privadas

function minhaBiblioteca(params) {
    function auxiliar(valor) {
        return 10 + valor
    }

    return {
        add5() {
            return auxiliar(5)
        },
        add7() {
            return auxiliar(7)
        }
    }
}

var biblioteca = minhaBiblioteca()
console.log(biblioteca)
console.log(biblioteca.add5())
console.log(biblioteca.add7())

// evitar function anônima

function imprimeNomeCompleto(nome) {
    return function (params) {
        console.log(nome, 'Silva')
    }
}

function inicializa(params) {
    let nome = 'Carvalho'
    setTimeout(imprimeNomeCompleto(nome), 1000)
}

inicializa()