
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res') 
    // ou var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('Não passamos por este ano ainda, verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
            } else if (idade <21) {
                // Jovem
            } else if ( idade < 60) {
                // Adulto
            } else {
                //Idoso
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
            } else if (idade <21) {
                // Jovem
            } else if ( idade < 60) {
                // Adulta
            } else {
                //Idosa
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Idade Calculada: ${idade}`
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }

}

// sem as imagens aula https://www.youtube.com/watch?v=f5es-PpaUI8 aos 19 min.
