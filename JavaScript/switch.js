var cor = 'amarelo'

switch (cor) {
    case 'azul':
        console.log('Cor azul')
        break;

    case 'amarelo':    
        console.log('Cor Amarelo')
        break;

    case 'vermelho':    
        console.log('Cor vermelho')
        break;    
    default:
        console.log('Sem cor')
        break;
}

switch (cor) {
    case 'azul':
        console.log('Cor azul')
        break;

    case 'verde':    
        console.log('Cor verde')
        break;

    case 'vermelho':    
        console.log('Cor vermelho')
        break;    
    default:
        console.log('Sem cor')
        break;
}

switch (cor) {
    case 'vermelho':
    case 'amarelo':
    case 'laranja':
        console.log('Cor quente')
        break;

    case 'verde':
    case 'azul':
    case 'roxo':
        console.log('Cor fria')
        break; 

    default:
        console.log('Sem cor')
        break;    
}