/*O efeito hoisting consiste em "mover para cima" uma
  declaração quando necessário. Funciona apenas para 'var'.s
 */
console.log('a =', a)
var a = 2
console.log('a =', a)

//Gera erro, não funciona com 'let'.
console.log('b =', b)
let b = 3
console.log('b =', b)