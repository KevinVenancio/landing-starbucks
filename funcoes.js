let copao = document.getElementById("#copao")
let miniCopos = document.getElementById("#copinhos")

function changeBigCup(type){
    if (type == 1){
        arquivo = "/arquivos/img1.png"
    } if (type == 2) {
        arquivo = "/arquivos/img2.png"
    } if (type == 3) {
        arquivo = "/arquivos/img3.png"

    }

    document.getElementById("copao").src = arquivo
}