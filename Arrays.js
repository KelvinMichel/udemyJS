const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4]) //javascript vai gerar um erro undefined pois nao existe a posição 

valores[4] = 10
console.log(valores)
console.log(valores.length) // length exibe a quantidade de itens dentro do array

valores.push() //comando push , adiciona mais itens ao array pre definido
//exemplo
valores.push({id: 3}, false, null, 'teste')// temos aqui um exemplo deobjeto
console.log(valores)

console.log(valores.pop()) // função pop retira do array o ultimo item

delete valores[0] //deleta valor de acordo com o indice mostrado

console.loh(valores)

console.log(typeof valores) //função typeof exibe o tipo de dados do array

