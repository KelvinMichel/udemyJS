//Factory simples, o que é Factory(fabrica), é um metodo que cria um objeto a partir de uma notação literal

function criarPessoa(){
    return {
        nome: 'kelvin',
        idade: 27,
        peso: 'nulo',
        tipoSanguineo: 'AB+'
    }
}
console.log(criarPessoa());