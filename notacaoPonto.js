console.log(Math.ceil(6.1)) //ceil arredonda para cima os valores

const obj1={}
obj1.nome = 'Bola';
//obj1['nome] = 'Bola2;

console.log(obj1.nome);

function Obj(nome){
    this.nome = nome ; //a palavra this, torna a variavel publica , acessivel fora da funcao
}

const obj2 = new Obj('cadeira');
const obj3 = new Obj('mesa');
console.log(obj2.nome);
console.log(obj3.nome);


