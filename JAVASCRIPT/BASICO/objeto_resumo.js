/*var a = {
    nome:"Álife",           -----> primeira maneira de criar um objeto
    sobrenome:"Silva"
}
console.log(a)
*/



/*
function obj(n,s){
    return {nome:n,sobrenome:s}     ----> 2 maneria de criar um objeto

}

var a = obj("Igor","Oliveira")

console.log(a)


*/


function obj(n,s){
    this.nome = n;
    this.sobrenome = s;

}
var a = new obj("Álife","Silva")


console.log(a)