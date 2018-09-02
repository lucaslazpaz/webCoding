//Armazenando uma função em uma variável.
const imprimirSoma = function (a ,b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variável.
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//Retorno implícito
const subtracao = (a, b) => a - b
const soma1 = (a, b) => a + b

console.log(subtracao(3, 2))
console.log(soma1(2, 3))