var str = "Valor Qualquer 'viu'"; //para colocar aspas dentro de um string precisa colocar nessa caso aspas simples dentro,sé começar com aspas simples coloque aspas duplas dentro do texto
str += " outro texto" // quando você soma duas strings você gera á concatenação

var  outroExemplo = "Algum valor" + " " + "Outro texto"// outro exemplo de concatenação

console.log(str);
console.log(outroExemplo)




//somando string com numeros
var numero = 8
var outraString = "Numero qualquer : " + numero

console.log(outraString)

//curiosidade
numero *= "4" //javascript vai transforma essa string em numero para fazer a multiplicação
console.log(numero)