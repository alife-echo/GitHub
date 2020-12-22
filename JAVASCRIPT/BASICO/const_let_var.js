var numero1 = 4;// acessivel em qualquer lugar é seu valor pode ser atribuido é reatribuido
let numero2 = 5;// let tem um scopo local,ele só existe dentro de um bloco é seu valor pode ser atribuido é reatribuido
const numero3 = 6;// é uma variavel constante,quer dizer que ela não pode ser reatribuida,posso modificala mas não reatribuila,é tem um scopo local 


const exemplo_Const = {}
exemplo_Const.nome = "Álife" // modificando a constante, está certo
//exemplo_Const = {nome:"Reginaldo"} // Reatribuindo uma constante, está errado




console.log(numero1)
console.log(numero2)
console.log(numero3)
console.log(exemplo_Const)