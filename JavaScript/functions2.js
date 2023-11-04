// console.log(this)

function Usuario(params) {
    this.nome = 'Carvalho'
    this.idade = 18
    this.soma = function (a, b) {
        return a + b
    }
}

// Usuario()

var usuario = new Usuario()
console.log(usuario)
console.log(usuario.nome)
console.log(usuario.idade)
console.log(usuario.soma(10, 4))

// call

function Personagem(p1, p2, p3) {
    console.log(p1, p2, p3)
    console.log('personagem this', this)
}

var personagemThis = {
    nome: 'Carvalho'
}

Personagem.call(personagemThis, 'param1', 123, [5])

// apply

var personagemParams = ['param$$$', 321, [1, 2, 3]]
Personagem.apply(personagemThis, personagemParams)

// bind

var pers = Personagem.bind(personagemThis, 'Olá')
pers('Mundooo', '!!!')

// arrow functions

var soma = (a, b) => {
    return a + b
}

var soma = (a, b) => a + b

console.log(soma(10, 10))

var retornaUsuario = () => (
    {
        nome: 'Carvalho',
        idade: 18
    }
)

var retornaUsuario = cidade => (
    {
        nome: 'Carvalho',
        idade: 18,
        cidade
    }
)

console.log(retornaUsuario('São Paulo 123'))

var imprimiThis = () => {
    console.log(this)
}

imprimiThis()
imprimiThis.call({nome: 'Carvalho'})