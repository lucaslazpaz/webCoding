// Novo recurso do ES2015 para extrair atributos de Objetos!


const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//Extrair os atributos 'nome' e 'idade' do objeto 'pessoa'.
const { nome, idade } = pessoa
console.log(nome, idade)

/*Extrair os atributos 'nome' e 'idade' do objeto 'pessoa' 
  e atribuindo nomes diferentes.*/
const { nome: n, idade: i } = pessoa
console.log(n, i)

//Extrair atributos aninhados.
const { endereco: { logradouro, numero } } = pessoa
console.log(logradouro, numero)

//Extrair atributos não declarados e com valores padrões.
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)