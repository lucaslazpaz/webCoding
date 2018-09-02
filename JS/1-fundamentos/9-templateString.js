const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'
//Uma outra maneira de concatenar strings, indicado para grandes sentenças.
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)
//Para concatenar expressões.
console.log(`1 + 1 = ${1 + 1}`)
//Função para transformar texto minúsculo em MAIÚSCULO.
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)