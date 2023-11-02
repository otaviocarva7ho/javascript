var novoUsuario = {
    nome: 'Carvalho',
    idade: 18,
    pais: 'Brasil',
    youtube: 'Programador a Bordo'
}

var { nome, pais, idade } = novoUsuario
console.log(nome, pais, idade)

var { nome: primeiroNome } = novoUsuario
console.log(primeiroNome)

var { youtube: canal } = novoUsuario
console.log(canal)

var novoUsuario2 = {
    nome: {
        primeiro: 'Carvalho 2',
        segundo: 'Silva'    
    }
}

// var primeiro = novoUsuario2.nome.primeiro
// console.log(primeiro)

var { nome: { primeiro } } = novoUsuario2
console.log(primeiro)

var { nome: { segundo = 'Nero' } } = novoUsuario2
console.log(segundo)


function imprimeUsuario({ nome, idade, sexo, pais = 'Japão' }) {
    console.log(nome)
    console.log(idade)
    console.log(sexo)
    console.log(pais)
}

var usuarioFunction = {
    nome: 'Carvalho Silva',
    idade: 18,
    sexo: 'M',
    pais: 'Brasil'
}

imprimeUsuario(usuarioFunction)

console.log(Object.keys(usuarioFunction))

console.log(Object.values(usuarioFunction))