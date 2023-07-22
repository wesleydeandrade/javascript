function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML =  `Agora são ${hora} Horas!`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'imagem/manha.png'
        document.body.style.background = '#cfb14e'
        msg.style.color = '#cfb14e'
    } else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'imagem/tarde.png'
        document.body.style.background = '#755040'
        msg.style.color = '#755040'

    } else{
         // Boa noite
         img.src = 'imagem/noite.png'
         document.body.style.background = '#081b1f'
         msg.style.color = '#081b1f'
    }


}

