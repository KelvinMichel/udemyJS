let dobro = function (a){
    return 2 * a;
}

dobro = (a) => {
    return 2 * a;
}

dobro = a => 2* a // neste caso sem usar as chaves o return fica implicito
console.log(dobro(Math.PI))

let ola = function(){
    return 'Ola';
}

ola = () => 'Ola';