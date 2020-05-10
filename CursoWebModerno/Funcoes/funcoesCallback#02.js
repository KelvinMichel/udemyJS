const notas = [5.5, 4.5, 3.5, 6.5, 7, 10]

//Sem CallBack
let notasBaixas = [];
for( let i in notas){
    if(notas[i] < 6){
    notasBaixas.push(notas[i]);
    }
}
console.log(notasBaixas + " Sem CallBack");

//Com CallBack
const notasBaixas2 = notas.filter(function (notas){
        return notas <= 6 ;
})

console.log(notasBaixas2 + " Com CallBack")

//Com CallBack e Arrow
const notasBaixas3 = notas.filter( notas => notas <=6);
console.log( notasBaixas3 + " Com CallBack e Arrow");

//Reaproveitar a Função em varios lugares

const notasReprovados = nota => nota < 6;
const notasBaixas4 = notas.filter(notasReprovados);
console.log( notasBaixas4 + " Com Callback, arrow e reaproveitamento de funcao");