function carregar(params) {
    let msg = window.document.querySelector('div#msg')
    let img = window.document.querySelector('img#imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.scr = 'foto-manha.jpg'
        document.body.style.background = '#EFC8AB'
    } else {
        if (hora >= 12 && hora <= 18) {
            // Boa tarde
            img.src = 'foto-tarde.jpg'
            document.body.style.background = '#8DA4B6'
        } else {
            // Boa noite
            img.src = 'foto-noite.jpg'
            document.body.style.background = '#9072A7'
        }
    }
}