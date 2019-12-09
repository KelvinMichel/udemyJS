let valor //não foi nem inicializada
console.log(valor) //vou receber uma msg do tipo 'undefined'

valor = null //ausencia de valor, neste caso nao estou apontando para nenhum endereço de memoria 
console.log(valor)
//console.log(valor.tostring()) //erro!

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!! produto.preco)
// delete produto.preco para deletar alguma atributo 
console.log(produto)

produto.preco = null //sem preco
console.log(!! produto.preco);
console.log(produto);

//passagem por valor , quando passa valores primitivos, passa o valor propriamente dito
//passagem de regerencia, passa o endereço( un atributo ) de um objeto.

