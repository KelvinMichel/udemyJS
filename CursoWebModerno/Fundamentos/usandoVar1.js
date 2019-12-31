{
    {
        {
            var sera = `sera???`
        }
    }
} // neste caso mesmo estando dentro de um bloco , ficara visivel mesmo fora do bloco, isto para VAR

console.log(sera)

function teste (){
    var teste = 123;
    console.log(local);
}

//a variavel local so fica disponivel dentro da function, nao fica disponivel fora neste caso

teste();
console.log(local);