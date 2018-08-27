/*Existe mais de uma forma de declarar numéros, uma delas 
  é usar a palavra reservada Number.
*/
const peso1 = 1.0
const peso2 = Number('2.1')

//O Number auto detecta se o valor declarao é inteiro ou não.
console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * avaliacao2 * peso2
const media = total / (peso1 + peso2)

//Existem maneiras diferentes de tratar as saídas do código.
// tratar casas decimais.
console.log(media.toFixed(2))
// transformar a saída em string
console.log(media.toString())
// converter em binário
console.log(media.toString(2))

//existe diferença entre number(número) e Number(função).
console.log(typeof media)
console.log(typeof Number)