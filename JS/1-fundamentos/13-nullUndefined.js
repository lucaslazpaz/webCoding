/*Uma variável não aloca o valor atribuído, mas sim
  o endereço de memórida do valor.
*/
const a = {
    name: 'Teste'
}
console.log(a)
//Atribuição por referência!.
const b = a
/*Quando uma outra variável que também recebe o mesmo endereço de memória, recebe um valor novo,
  o valor é "atualizado" para as demais variáveis que apontam para esse mesmo endereço.
*/
b.name = 'Opa'
console.log(a)

//Em tipos primitivos a atribuição é feita por valor!.
let c = 3
let d = c
d++
console.log(d)
console.log(c)

//Variável não inicializada.
let valor
console.log(valor)
//Null é a ausência de valor.
valor = null
console.log(valor)
//ERRO! Não é possível acessar valores nulos e indefinidos!.
//console.log(valor.toString())

const produto = {}
//Valor vazio.
console.log(produto)
//Valor não definido.
console.log(produto.preco)

//Evite atribuir undefined!.
produto.preco = undefined
console.log(!!produto.preco)
//Para remover o atributo de um objeto.
//delete produto.preco
console.log(produto)

//Sem preço, diferente de um produto com preço indefinido.
produto.preco = null
console.log(!!produto.preco)
console.log(produto)