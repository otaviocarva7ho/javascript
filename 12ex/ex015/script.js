function verificar(params) {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = window.document.querySelector('input#txtano')
    let res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = window.document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <10) {
                // Criança
                img.setAttribute('src', 'homem-bebe.jpg')
            } else {
                if (idade < 21) {
                    // Jovem
                    img.setAttribute('src', 'homem-jovem.jpg')
                } else {
                    if (idade < 50) {
                        // Adulto
                        img.setAttribute('src', 'homem-adulto.jpg')
                    } else {
                        // Idoso
                        img.setAttribute('src', 'homem-idoso.jpg')
                    }
                }
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <10) {
                // Criança
                img.setAttribute('src', 'mulher-bebe.jpg')
            } else {
                if (idade < 21) {
                    // Jovem
                    img.setAttribute('src', 'mulher-jovem.jpg')
                } else {
                    if (idade < 50) {
                        // Adulto
                        img.setAttribute('src', 'mulher-adulta.jpg')
                    } else {
                        // Idoso
                        img.setAttribute('src', 'mulher-idosa.jpg')
                    }
                }
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}