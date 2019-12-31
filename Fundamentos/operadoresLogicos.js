/* resumo tabela verdade;
operadores  binario 'e'

v e v -> v
v e f -> f
f e ? -> f

op1 e op2 e op3 e op4 -> f basta ter apenas um falso para que todo resultado seja falso

operadores ou;

v ou ? -> v 
f ou v -> v 
f ou f -> f

operadores binario ou exclusivo;

v xor v -> f
v xor f -> v
f xor v -> v
f xor f -> f

operadore unario negacao logica
!v -> f
!f -> v */

function compras (trabalho1, trabalho1){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
   // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete //operador unario
    
    return {comprarSorvete, comprarTv32, comprarTv50, manterSaudavel}
}

console.log(compras(true, false))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))