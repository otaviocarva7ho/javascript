var usuario = {
    nome: 'Carvalho',
    idade: 26,
    youtube: 'Programador a Bordo',
    'ultimo-nome': 'Silva',
    competecias: {
        linguagens: ['JavaScript', 'Python', 'Go', 'Scala', 'PHP'],
        instrumentosMusicais: ['Guitarra', 'Baixo', 'Bateria']
    }
}

console.log(usuario)
console.log(usuario.idade)
console.log(usuario.nome)
console.log(usuario.youtube)
console.log(usuario['ultimo-nome'])

usuario.ano = 2023
console.log(usuario)
console.log(usuario.ano)

delete usuario.idade
console.log(usuario)

usuario.hobbies = ['Música', 'Programar', 'Viajar']
console.log(usuario)

var usuario2 = {  
    digaOi: function(name) {  //digaOi() FORMA MAIS CURTA
        return `Olá ${name}`
    }
}

console.log(usuario2.digaOi('Carvalho'))
console.log(usuario2.digaOi('Silva'))

var cor = 'rosa'
var idade = 18
var nome = 'Carvalho'

var usuario3 = {
    nome,
    idade,
    cor
}

console.log(usuario3)

var usuario4 = {
    nome: 'Carvalho',
    idade: 18
}

var extraInfo = {
    pais: 'Brasil',
    estado: 'São Paulo'
}

/*
    {
        nome: 'Carvalho',
        idade: 18,
        pais: 'Brasil',
        estado: 'São Paulo'
    }
*/

var novoUsuario = Object.assign({}, usuario4, extraInfo)
console.log(novoUsuario)

// Object.assign(usuario4, extraInfo)
// console.log('usuario4', usuario4)

var novoUsuario2 = {
    ...usuario4,
    ...extraInfo,
    sexo: 'M',
    profissao: 'Programador'
}

// var novoUsuario = Object.assign({}, usuario4, extraInfo)

console.log(novoUsuario2)

var nomeVariavel = 'estado'
var nome = 'lastName'

var usuario5 = {
    [nome]: 'Carvalho',
    [nomeVariavel]: 'São Paulo'
}

console.log(usuario5)

// getters e setters

var usuarios = [
    {
        nome: 'Carvalho',
        idade: 18
    },
    {
        nome: 'João',
        idade: 19
    },
    {
        nome: 'Maria',
        idade: 21
    }
]

console.log(usuarios[2].idade)

var usuario = {
    posicao: 0,
    get atual() {
        return usuarios[this.posicao]
    },
    set atual(posicao){
        this.posicao = posicao
    },
    proximo() {
        ++this.posicao
    },
    anterior() {
        --this.posicao
    }
}

console.log(usuario.atual) // { nome: 'Carvalho', idade: 18 }
usuario.proximo()

console.log(usuario.atual) // { nome: 'João', idade: 19 }
usuario.proximo()

console.log(usuario.atual) // { nome: 'Maria', idade: 21 }
usuario.anterior()

console.log(usuario.atual) // { nome: 'João', idade: 19 }

usuario.atual = 0
console.log(usuario.atual) // { nome: 'Carvalho', idade: 18 }

usuario.atual = 2
console.log(usuario.atual) // { nome: 'Maria', idade: 21 }