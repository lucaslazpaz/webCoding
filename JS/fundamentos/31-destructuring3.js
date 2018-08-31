/*Destructuring em funções.
  Criando função e passando valores padrões iniciais por destructuring,
  utilizando biblioteca Math para gerar valores randomicos ente o min 
  e max (ou especificados, ou padrões quando não especificado) */
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
//Atribuindo valores iniciais para min e max e passando por objeto.
const obj = { max: 50, min: 40 }
console.log(rand(obj))
//Utilizando valores padrões para min e max e passando por objeto vazio.
console.log(rand({}))