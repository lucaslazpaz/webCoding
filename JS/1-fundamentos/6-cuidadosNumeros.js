//Divisões por zero geram resultados do tipo "Infinity".
console.log(7 / 0)
//Tipagem fraca permite calculo entre determinadas strings e números.
console.log("10" / 2)
console.log("3" - 2)
//Em determinados casos não irá calcular, e sim concatenar.
console.log("3" + 2)
//Algumas strings calculadas com números geram "NaN"(Not a Number).
console.log("Legal" * 5)
//Precisão de ponto flutuante não é 100% segundo Orgão IEEE.
console.log(0.1 + 0.7)
//Para determinadas funções com números é necessário utilizar parentes.
console.log((10.382).toFixed(2))