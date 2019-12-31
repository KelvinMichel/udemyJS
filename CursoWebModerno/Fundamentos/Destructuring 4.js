function rand(min = 0, max = 1000){
    if (mim > max) [min, max] = [max, mim];
    const valor = Math.random( ) * (max - min) + mim;
    return Math.floor(valor);
}
console.log(rand([50,40]));
console.log(rand([992]));
console.log(rand([,10]));
console.log(rand([]));
console.log(rand());