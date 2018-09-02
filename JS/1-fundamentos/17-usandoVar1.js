/*A variável var pode ser acessada de fora do escopo
  o qual foi declarada. Variáveis declaradas com var,
  podem apresentar escopo global e escopo de função.*/
{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}
console.log(sera)
/*A variável var não pode ser acessada de fora do escopo
  de uma função o qual foi declarada */
function teste() {
    var local = 123
}
teste()
console.log(local)