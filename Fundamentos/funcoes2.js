//armazenando uma funcao em uma variavel

const imprimiSoma = function (a,b){
    console.log (a +b );
}

imprimirSoma(2,3)

//armazenando uma funcao arrow em uma variavel (funcao reduzida)
const soma = (a,b) => {
    return a +b ;
}
console.log(soma(2,3))

/*retorno implicito(funcao ainda mais reduzida), 
muito usada quando ten-se uma função que vai usar apenas uma linha de codigo*/
const subtracao = (a,b) => a-b;
console.log (subtracao(2,3));

//retorno implicito mais reduzido com aoenas um parametro
const imprimi2  = a => console.log(a);
imprimi2 ('legal!!!!');


