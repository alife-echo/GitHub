            //primeira maneira de fazer um array.menos usado
//var alunos = new Array("Igor","José","Marcos","Mariana");
            //cojunto de variaveis sequenciais

//console.log(alunos[4]);


//var alunos = ["Igor","José","Marcos","Mariana"];
//console.log(alunos.length)

/*
var alunos = ["Igor","Marcos","Mariana","Joana","Leo"]

for (var i = 0;i<alunos.length;i++){        // maneira de fazer um lista de alunos com array é for
    console.log(alunos[i])
}

*/
/*
var alunos = ["Igor","Marcos","Mariana","Joana","Leo"]


for(var aluno in alunos ){     // var desse jeito em que o codigo está, o for ira mostra apenas as posições do array
    console.log(aluno)

}*/



var alunos = ["Igor","Marcos","Mariana","Joana","Leo"]
                                // maneira mais elegante de criar um array bastante simplificado é legivel
for(var nomes of alunos){      //in = vai pegar a posição(índice) o array
    console.log(nomes)           // of = não vai pegar a posição(índice) do array,ira pegar o seu conteudo
}

console.log('------------------------------')                                  //utilize esses dois exemplos quando for criar arrays com for 


var alunos_exemplo = ["Igor","Marcos","Mariana","Joana","Leo"]

for (var i = 0;i<alunos_exemplo.length;i++){        // maneira de fazer um lista de alunos com array é for
    console.log(alunos_exemplo[i])                  
}
