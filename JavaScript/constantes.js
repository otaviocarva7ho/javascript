// constantes

const anoNascimento = 1992
console.log(anoNascimento)

if (true) {
    const autor = 'Carvalho'
    console.log(autor)
}

// redeclarar e atribuir (diferença entre var, let e const)

if (true) {
    const nome = 'Carvalho'
    console.log(nome)
}

const nome = 'Fulano'
// nome = 'Carvalho'

const competencias = ['JavaScript', 'Python', 'Go']
console.log(competencias)

competencias[1] = 'Scala'
console.log(competencias)

const usuario = {
    nome: 'Carvalho',
    idade: 18
}

console.log(usuario)

usuario.idade = 77
usuario.cidade = 'São Paulo'

console.log(usuario)