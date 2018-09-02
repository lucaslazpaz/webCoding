const escola="Cod3r"
//Mostrar caracter da posição x.
console.log(escola.charAt(4))
console.log(escola.charAt(5))
//Mostrar valor da tabela ASCII do caracter na posição x.
console.log(escola.charCodeAt(3))
//Mostrar o índice do caracter indicado.
console.log(escola.indexOf('3'))
//Percorre a string a partir do índice informado.
console.log(escola.substring(1))
/*Percorre a string a partir do índice inicial informado até
o índice informado -1. Ex: Vá ao índice 0 e me dê 3 caracteres*/
console.log(escola.substring(0, 3))
//Concatenar um literal(valor não armazenado) a um valor armazenado.
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
//Substituir o valor do índice informado pelo valor informado.
console.log(escola.replace(3, 'e'))
//Quebra uma string a partir de um "separador" informado.
console.log('Ana,Beatriz,Maria'.split(','))