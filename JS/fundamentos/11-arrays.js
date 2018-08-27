//Definindo um array.
const valores = [7.7, 8.9, 6.3, 9.2]

//Acessando valores pelo índice.
console.log(valores[0], valores[3])
console.log(valores[4])

//Preenchendo valores de um array pelo índice.
valores[4] = 10

//Contando elementos de um array.
console.log(valores.length)

//Inserindo valores finais em um array.
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//Retira valores finais em um array.
console.log(valores.pop())
console.log(valores)

//Deletar valores de um array pelo índice.
delete valores[0]
console.log(valores)

//Array é um Objeto!.
console.log(typeof valores)