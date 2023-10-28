var a = true
var b = false

console.log(!a)
console.log(!b)

console.log('!!a', !!a)
console.log('!!b', !!b)

// null, undefined, '', false, 0

console.log(!null)
console.log(!!undefined)
console.log(!!'')
console.log(!!0)

console.log(!!'texto')
console.log(!!20)

console.log(10 && 'texto' && 'Programador')
console.log(null && 'Programador a bordo')
console.log('Passa' && 0 && 'Dev')
console.log('Passou' && null)
console.log('Passou' && 0)
console.log('False' && 100 && '' && 'Teste' && null)

console.log(10 > 5 && 7 < 10)
console.log(10 > 5 && 10 > 11)

console.log(null || 'Programador a bordo')
console.log(null || 'Programador a bordo' || 26)
console.log(null || '' || 26)
console.log('Programador a bordo' || 'teste')

console.log(10 > 5 || 10 < 11)
console.log(10 > 5 || 10 > 11)
console.log(10 < 5 || 10 > 11)
console.log(null || false || 0)

console.log('Programador' && 2050 || '' && 26)
console.log('Programador' && 2050 && 'a Bordo' || 0)
console.log(null || !'' && 'Programador')