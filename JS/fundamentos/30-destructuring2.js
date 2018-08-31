const [a] = [10]
console.log(a)

/*Destructuring em array, criando um array 
  e pulando alguns elementos. */
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

/*Atribuindo 'nota' ao segundo elemeneto do segundo array. */
const [, [, nota]] = [[, 8, 8], [9, 6, 9]]
console.log(nota)
