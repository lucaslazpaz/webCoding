/*O valor 2 sobrescreve o valor 1, por se tratar de var
  e ter escopo global(com exceção de funções). */
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora = ', numero)