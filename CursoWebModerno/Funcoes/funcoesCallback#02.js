const notas = [5.5, 4.5, 3.5, 6.5, 7, 10]

//Sem CallBack
let notasBaixas = [];
for( let i in notas){
    if(notas[i] < 6){
    notasBaixas.push(notas[i]);
    }
}
console.log(notasBaixas);

//Com CallBack
