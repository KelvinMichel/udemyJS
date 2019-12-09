// funcao sem retorno
function imprimiSoma(a,b/*parametros da função, variaveis*/){
    console.log(a+b);
}

imprimiSoma (2,3);
imprimiSoma(2);
imprimiSoma(22,3,4,5,5,5,);
imprimiSoma();

//funcao com retorno
function  soma(a,b = 0){
    return a + b;
}

console.log(soma(2,3));
console.log(soma(2)); // aqui ele considera que o b é 0, pois foi passado o valor 0 para a variavel b
