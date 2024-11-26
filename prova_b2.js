/* A função criaVetorCores é responsável por ler as cores da página e inserir todas num vetor, todas as cores com nome em letra minuscula, o console.log está ali para demonstrar que as cores foram inseridas
com letra minuscula*/

function criaVetorCores(){
    const vetorCores = []

    for(let i = 1; i <= 148; i++){
        const colorName = document.querySelector(`#box${i} > span > a`).innerText.toLowerCase(); vetorCores.push(colorName)} 

    console.log(vetorCores)

    return vetorCores;
}

/* A função selecionaCores sorteia aleatoriamente 10 cores do vetor criado em criaVetorCores */

function selecionaCores(quantidade, vetorCores){

    let vetorSelecionados = []

        if(quantidade > vetorCores.length){
            alert("Você não pode pedir uma quantidade de cores maior do que existe no vetor")
            return;
        }

    for(let i = 0; i < quantidade; i++){
        let i_aleatorio = Math.floor(Math.random()*vetorCores.length)
        let cor_selecionada = vetorCores.splice(i_aleatorio, 1)
        vetorSelecionados = [...vetorSelecionados, ...cor_selecionada]
    }

    console.log(vetorSelecionados)

    return vetorSelecionados
}

/* A função sorteiaCor faz sorteio de uma cor presente no vetor criado em selecionaCores e imprime no console do navegador */

function sorteiaCor(){
    const vetorCores = selecionaCores(10, criaVetorCores())
    let indice = Math.floor(Math.random()*vetorCores.length)
    let corSelecionada = vetorCores.splice(indice, 1)
    console.log("A cor sorteada foi " + corSelecionada)
}

/* A função main ela é responsável por rodar a função sorteiaCor, que por sua vez chama todas as outras funções */

function main(){
    sorteiaCor()
}
