/*Em JavaScript podemos criar nossos objetos através de 
  funções, ou seja, os objetos são instanciados de funções. */
console.log(typeof Object)
console.log(typeof new Object())

//Criando uma função e instânciando um objeto a partir dela.
const Client = function() {}
console.log(typeof Client)
console.log(typeof new Client)

/*Pelo fato de uma classe ser uma função, também é possível
instanciar objetos de uma classe.*/
class Product {}
console.log(typeof Product)
console.log(typeof new Product())