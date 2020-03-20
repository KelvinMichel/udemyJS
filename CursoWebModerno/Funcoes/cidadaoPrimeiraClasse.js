// Funcao em JS e First-Class Object
// Higher-order function

//criar de forma literal

function fun1(){}

//armazenar uma a funcao em uma variavel

const fun2 = function (){}; /*para invocar a a funcao, tem que chamar a 
constante usando os parenteses , se simplismente chamar a funcao
e passar como parametros, voce chama a funcao em si*/

// armazenar a funcao em um array
const array = [function (a,b){return a +b }, fun1, fun2]
console.log(array[0], (2,3));

//armazenar em um atributo de objeto
const obj = {};
obj.falar = function (){return 'ola mundo'};
console.log(obj.falar())

//passar funcao como parametro
function run (fun){
    fun()
}

run(function(){console.log('executando...') } );

//uma funcao pode retornar/conter uma funcao
function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}
soma(1,2)(10); //chamar diretamente
const cincoMais = soma(2,3);
cincoMais(4);

 