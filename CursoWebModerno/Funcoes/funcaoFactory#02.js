function meusProdutos(nome, valor, desconto = 0.1){
    return{
        nome,
        valor,
        desconto,
        estoque: 'Sim'
    }
}

console.log(meusProdutos('notebook', '1000,00', 0.2));
console.log(meusProdutos('mouse', '10,00', 0.1));