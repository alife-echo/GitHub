/*

== igual a 
=== valor igual e igual
!= não é igual
!== não igual ou não igual

> maior  que
< menor que
> = maior que ou igual 
<= menor ou igual a 

*/


console.log( 2 == 3)// comparação 2 e igual a 3 ? não resultado falso

var a = 3;
var b = "3";



console.log( a == b) // a comparação vai dar true,mas os valores são diferentes, tem 3(numero) é 3(string) como mudar isso ? olha lá embaixa use o  ===

console.log(a===b) // use isso para dar falso

console.log(a!=b) // a é diferente de b vai dar true

console.log(a!==b) // a é diferente de b tanto em tipo quanto em valor ? sim vai dar true


var c = 3 
var d = 5;


console.log(c>d); // 3 é maior que 5  ? não vai dar false
console.log(d>c); // 5 é maior que 3 ? sim vai dar true


var e = 4;
var f = 4;

console.log(e>=f); //4 é maior ou igual a 4 ? é igual a 4 então vai dar true, mesmo raciocionio para <= 