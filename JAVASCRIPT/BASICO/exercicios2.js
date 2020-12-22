/*
maior = function (n1,n2){

    numero1 = n1;
    numero2 = n2;
    if(numero1>numero2){
        console.log("Numero "+ numero1 + " é maior");
    }
    else if (numero2>numero1){
        console.log("Numero " + numero2 + " é maior");
    }

    else{
        console.log("ERROX 504");
    }
        
    return maior;

}


resultado1 = maior(6,4);
console.log(resultado1);
*/


/*
ordem = function(lista){
    5
    ordenacao = lista.sort((a,b)=>a-b); // isso daqui recebe um array
    for(let numero of ordenacao){ // of mostra o conteudo do array
        console.log(numero);
    }
}


console.log(ordem([9,1,7,4,12]));

*/

/*
 function maiorArray(numero){
     return Math.max.apply(null,numero);
 }

console.log(maiorArray([3,10,6,7]));

*/


/*
function maiorNum(lista){
    var maior = lista[0]   
    for (let num of lista) {
       maior = Math.max(num,maior)
    }
    return maior;
}

console.log(maiorNum([10,5,14,7,9]))

*/
/*
function calcMedia(n1,n2,n3,n4,n5){
    lista = [n1,n2,n3,n4,n5];
    return (lista[0] + lista[1] + lista[2] + lista[3] + lista[4])/5
}

console.log(calcMedia(4,5,6,7,7));

*/

/*
function parImpar(n1) {
numero = n1;
if(numero%2==0){
console.log("O numero é par " + numero);
}
else{
console.log("O numero é impar " + numero);
}
return parImpar;

}
console.log(parImpar(9));

*/
/*
function criarObjeto(objeto){
 
   return objeto;
}

console.log(criarObjeto({
  nome:"alife",sobrenome:"silva"
}))

*/
/*

function datas(receber){
 var dia = receber.getDate();
 var mes = receber.getMonth();
 var ano = receber.getFullYear();

 var objeto = {
  dia,
  mes,
  ano
}
return objeto;
}
                          //mes/dia/ano
console.log(datas(new Date("12/15/2020")))
*/


function criarObjeto(objeto){
   var media = (objeto[0].idade+ objeto[1].idade)/2
    if(objeto[0].altura>objeto[1].altura){
    console.log(objeto[0].altura +"É maior" + " Media : " +media);
    
   }
   else{
       console.log(objeto[1].altura+" é maior" + " Media : " +media)
   }

  
 }
 
 console.log(criarObjeto(
     
 [
        
{
   idade:23,
   altura:1.5
    
},

{
    idade:21,
    altura:2.5
     
 }  
    
]
 ))
 