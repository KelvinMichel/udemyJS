//par nome e valor

const saudacao = 'opa'; //1 contexto lexico

function exec(){
    const saudacao = 'Fala Brother'; // contexto lexico 2
    return saudacao;
}

//objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua amapa 388',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);