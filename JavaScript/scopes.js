// escopo global

var nome = 'Carvalho'
console.log(nome)

function imprimeNome(params) {
    console.log(nome)
}

imprimeNome()

// escopo local

function imprimeIdade(params) {
    var idade = 18
    console.log(idade)
}

imprimeIdade()
// console.log(idade)

function imprimePais(params) {
    pais = 'Brasil'
    console.log(pais)
}

imprimePais()
console.log(pais)
console.log(this.pais)

// escopo dinâmico

function imprimeThis(params) {
    console.log('imprimeThis', this)
}

function imprimeMensagem(params) {
    imprimeThis.call({nome: 'Sou um objeto'})
}

function imprimeMensagem2(params) {
    imprimeThis.call(['Sou um array'])
}

imprimeMensagem()
imprimeMensagem2()
// imprimeThis()

// escopo lexical

function usuario(params) {
    var nome = 'Carvalho'
    return function (params) {
        var sobrenome = 'Silva'
        console.log(nome, sobrenome)
    }
}

var user = usuario()
user()

// escopo de bloco com let 

if (true) {
    var youtube = '@programadorabordo'
    let autor = 'Carvalho'
    console.log(youtube)
    console.log(autor)
}

console.log(youtube)
console.log(autor)

// Diferenças do uso de let para o var

let sobrenome = 'Carvalho'
console.log(sobrenome)

{
    let sobrenome = 'Silva'
    console.log(sobrenome)
}

