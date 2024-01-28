//ler conteudo do campo
//calcular valores com formula
//apresentar resultado na tela
let parafina = 0

function calcularParafina (){
    let volumeAgua = document.querySelector('input').value
    parafina = (volumeAgua * 0.9)  
    let mensagemResultado = `Para ${volumeAgua}ml de água vc precisa de ${parafina}gr de parafina`
    exibirNaTela ('p', mensagemResultado)

}

function exibirNaTela (tag, valor){
    let campo = document.querySelector(tag)
    campo.innerHTML = valor 

}

