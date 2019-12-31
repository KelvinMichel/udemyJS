// uma variavel pode ser igual apenas em escopos diferentes, em mesmo escopo vai gerar bugs
// conselho, fuja do global
var numero = 1
{
    var numero = 2
    console.log ('dentro = ', numero)
}

console.log('fora =', numero)