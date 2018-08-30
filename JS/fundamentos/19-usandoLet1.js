/*Variáveis declaradas com let, pode apresentar escopo
  global, de função e de bloco*/
var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)