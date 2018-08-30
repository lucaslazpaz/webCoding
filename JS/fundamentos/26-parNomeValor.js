/*par Nome/Valor ou Chave/Valor.

  É possível ter uma mesma chave em contextos diferentes!*/
const saudacao = 'Olá' //contexto léxico 1

function exec() {
    const saudacao = 'Fala' //contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares Nome/Valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Maior',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)