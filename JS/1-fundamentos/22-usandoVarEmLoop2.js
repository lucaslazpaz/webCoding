/*Declarando um array vazio, utilizando um for para preencher
  o array com funções anônimas através do push. Pelo fato de 
  var não possuir escopo de bloco, sempre será armazenado o 
  último valor armazenado.
 */
var funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()