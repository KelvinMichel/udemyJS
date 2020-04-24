const soma = function (x,y){
    return x + y;
}

const imprimiResultado = function (a,b, operacao = soma){
    console.log(operacao(a,b));
}

imprimiResultado (3,4);
imprimiResultado(3,4, soma) // o soma nao precisa esta declarado aqui, e apenas um exemplo de que funciona com ele
imprimiResultado(4,4, function (x,y){
    return x - y;
})

imprimiResultado(3,4, (x,y) => x * y);

const pessoa = {
    falar: function (){
        console.log('Opa')
    }
}

pessoa.falar()