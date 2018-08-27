let isActive= false
console.log(isActive)

isActive = true
console.log(isActive)
//Negando 2 vezes uma variável, essa passa a assumir o valor "True".
isActive = 1
console.log(!!isActive)

//Casos em que o valor sempre será verdadeiro.
console.log('.::Verdadeiros::.')
//inteiros.
console.log(!!3)
console.log(!!-1)
//strings.
console.log(!!' ')
//arrays.
console.log(!![])
//objetos.
console.log(!!{})
//infinito.
console.log(!!Infinity)
//negação dupla de true.
console.log(!!(isActive = true))

//Casos em que o valor sempre será falso.
console.log('.::Falsos::.')
//zero.
console.log(!!0)
//string vazia.
console.log(!!'')
//nulo.
console.log(!!null)
//not a number (NaN).
console.log(!!NaN)
//indefinido.
console.log(!!undefined)
//negação dupla de false.
console.log(!!(isActive = false))


console.log('.::Comparação::.')
//Comparações com op. lógico OU ||.
console.log(!!('' || null || 0 || ' '))

//Exemplo comum de uso.
let nome = 'Lucas'
console.log(nome || 'Desconhecido')