/*Notação Ponto é o meio utilizado para acessar atributos
  de diferentes "membros".*/

//Acessando a funcão 'ceil' de Math.  
console.log(Math.ceil(6.1))

//Criando obj1 e preenchendo-o dinamicamente  
const obj1 = {}
obj1.nome = 'Cadeira'
obj1['nome'] = 'Cadeira2'
//Acessando o atributo nome de obj1
console.log(obj1.nome)

//Criando função Obj passando o atributo 'nome'.
function Obj(nome) {
    this.nome = nome
    //criando uma função como atributo.
    this.exec = function() {
        console.log('Executando...')
    }
}
//Acessando os diversos membros!
const obj2 = new Obj('Bola')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()