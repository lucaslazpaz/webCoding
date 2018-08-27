//Função sem retorno.
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 6, 7, 8)
imprimirSoma()

//Função com retorno, com um valor de paramêtro definido por padrão.
function soma(a, b = 0) {
    return a + b
}
console.log(soma (8, 5))
console.log(soma (10))
console.log(soma ())