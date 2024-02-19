function  verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.getElementById ('res')
    if (fano.value <= 999 || fano.value > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >=0 && idade <13) {
                //criança
                img.setAttribute('src', 'imgs/homemcrianca.png')

            } else if (idade >=13 && idade <21) {
                //adolescente
                img.setAttribute('src', 'imgs/homemjovem.png')

            }  else if (idade >21 && idade <50) {
                //adulto
                img.setAttribute('src', 'imgs/homemdulto.png')

            } else {
                //idoso
                img.setAttribute('src', 'imgs/homemidoso.png')
            }    
            
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'imgs/mulhercrianca.png')

            } else if (idade >=10 && idade <21) {
                //adolescente
                img.setAttribute('src', 'imgs/mulheradolescente.png')

            }  else if (idade >21 && idade <50) {
                //adulta
                img.setAttribute('src', 'imgs/mulheradulta.png')

            } else {
                //idosa
                img.setAttribute('src', 'imgs/mulheridosa.png')
            }    
        }


        var imgexistente = document.getElementById('foto');
        if (imgexistente) {
            res.removeChild(imgexistente); 
            
            
        }
        res1.style.textAlign = 'center'
        res1.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos. `
        res.appendChild(img)
        res.style.padding = "10px"
        res.style.textAlign = 'center'

        
    }
}