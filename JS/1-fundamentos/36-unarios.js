let num1 = 1
let num2 = 2

//Forma pós fixada
//acrescenta uma unidade no valor da variável.
num1++
console.log(num1)
//Forma pré fixada
//subtrai uma unidade do valor da variável.
--num1
console.log(num1)

/*Resulta 'true', pois a forma pré fixada realiza a 
  operação antes de realizar a comparação.*/
console.log(++num1 === num2--)
console.log(num1 === num2)