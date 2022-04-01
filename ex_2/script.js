// var inputidade = document.getElementById("ano")
// console.log(inputidade.value);

function verificar() {
    var inputidade = document.getElementById("ano")
    var atual = 2022;
    var idade = inputidade.value;
    var resultado = document.getElementById("res")
    var picture = document.getElementById("picture")
    if (idade <= 0 || idade > atual) {
        window.alert("Erro, tente novamente com um valor valido")
    } else {
        var fsex = document.getElementsByClassName("sexo")
        var calc = atual - idade
        var genero = ''

        if (fsex[0].checked) {
            genero = 'Homem'
            if (calc < 18) {
                genero = 'criança'
                picture.src = './imagens/criançaHom.png'
            } else if (calc >= 18 && calc < 60) {

                picture.src = './imagens/adultoHom.png'
            } else if (calc > 60) {
                genero = 'idoso'
                picture.src = './imagens/idosoHom.png'
            }
        } else {
            genero = 'Mulher '

            if (calc < 18) {
                genero = 'criança'
                picture.src = './imagens/criançaMen.png'
            } else if (calc > 18 && calc < 60) {

                picture.src = './imagens/adultoMul.png'
            } else {
                genero = 'idosa'
                picture.src = './imagens/idosoMul.png'
            }

        }
        resultado.innerHTML = `Detectamos ${genero} com ${calc} anos`




    }
}


