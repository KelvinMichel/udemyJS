// novo recurso do ES2015
//destructuring de objetos

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua Amapa',
        numero: 388
    }
}

//notacao para extrair uma informacao do objeto
const {nome, idade} = pessoa;
console.log(nome, idade);

const {nome:n, idade:i} = pessoa; // aqui estou extraindo dados do objeto pessoa e atribuindo ele a uma nova variavel
console.log(n,i);

//caso tente extrair um objeto que nao existe
const {sobrenome, bemHumorado = true} = pessoa; //atribui o true a chave bemHumorado
console.log(sobrenome, bemHumorado)

//para acessar chave dentro de um objeto aninhado
const {endereco: {logradouro, numero, cep}} = pessoa;
console.log(logradouro,numero,cep);

