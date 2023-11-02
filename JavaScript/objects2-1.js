var usuarioFunction = {
    nome: 'Carvalho Silva',
    idade: 18,
    sexo: 'M',
    pais: 'Brasil'
}

var props = Object.keys(usuarioFunction)
console.log(props)

for (let i = 0; i < props.length; i++) {
    // console.log(props[i])
    // console.log('usuarioFunction', usuarioFunction[props[i]])
}

for (const prop of props) {
    // console.log('usuarioFunction 2', usuarioFunction[prop])
}

for (const prop2 in usuarioFunction) {
    if (usuarioFunction.hasOwnProperty(prop2)) {
        console.log(prop2, usuarioFunction[prop2])
    }
}
