/*Se nota for mair ou igual a 7, resutado será 'Aprovado'.
  Se nota for menor que 7, resutado será 'Reprovado'.*/
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))
