/*Declarando um array vazio, utilizando um for para preencher
  o array com funções anônimas através do push. Pelo fato de 
  let possuir escopo de bloco, sempre será armazenado o 
  valor do momento da execução da função.
 */
var funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()