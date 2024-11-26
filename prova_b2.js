function getColors(){
    const vetorCores = []

    for(let i = 1; i <= 148; i++){
        const colorName = document.querySelector(`#box${i} > span > a`).innerText.toLowerCase(); vetorCores.push(colorName)} 

    return vetorCores;
}

function selectColors(quantidade, vetorCores){

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

    return vetorSelecionados
}

function selectCor(){
    const vetorCores = selectColors(10, getColors())
    let indice = Math.floor(Math.random()*vetorCores.length)
    let corSelecionada = vetorCores.splice(indice, 1)
    console.log(corSelecionada)
}
