function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

let opcao = 0;
