/*
var nomes = ["Igor","José","Maria"];
var notasA = [7.0,6.7,9.5];
var notasB = [8.0,7.0,8.5];

function media(n1,n2){

    return(n1+n2)/2
}

function passou(media){
  if ( media >=7){
      return "Aprovado"
  }else{
      return "Reprovado"
  }
}


for(var index in nomes){
  
  var nota1 = notasA[index];//conteudo notas na coluna1
  var nota2 = notasB[index];// conteudo notas na coluna2
  var m = media(nota1,nota2);
  
    //conteudo nomes na coluna0
    console.log(nomes[index]+// quando o index está dentro de parenteses ele é forçado a mostrar seu conteudo não mas sua posição
        " - "+
        nota1+
        " - "+
        nota2+"  -  "+

        passou(m)
      
        );
}


*/


//criar sistema de notas para um escola = como nomes de acordo com as notas  é suas medias;

/*
var nomes_Alunos  = ['Álife','Juliana','Samy'];
var notas1 = [6.5,8.2,9.6];
var notas2 = [9.7,3.4,6.1];


function media(n1,n2){

    return(n1+n2)/2

}

function passou(media){
    
    if(media>=7){
        return "Aprovado"
    }
    else{
        return "Reprovado"
    }
}

for(var index in nomes_Alunos){

    var nota1 = notas1[index];
    var nota2 = notas2[index];
    var m = media(nota1,nota2);

    console.log(nomes_Alunos[index]+" :  Nota 1-BI : "+nota1+"----- Nota 2-BI : "+nota2+"----"+" Sua media : " +  m + "----" + "  Situação:  "+passou(m))


}
*/




//Exemplo praticando


var times = ['Flamengo','Paysandu','Botafogo','Coríntias','São Paulo']
var pontos_tabela1 = [5,9,4,6,7];
var pontos_tabela2 = [9,8,7,10,7];
var pontos_tabela3 = [10,7,9,7,8];

function media_pontos(p1,p2,p3){ 
   
    return (p1+p2+p3)/3;

}
function classificacao(media_pontos){

    if(media_pontos>=8){
        return "Classificado para as finais";
    }
    else{
        return "Não está classificado"
    }
}


for (var index in times){

    var ponto1 = pontos_tabela1[index];
    var ponto2 = pontos_tabela2[index];
    var ponto3 = pontos_tabela3[index];
    var m = media_pontos(ponto1,ponto2,ponto3)


   console.log(times[index] + " - " + ponto1 + " - "+ponto2 + " - "+ ponto3+" - " + "  Media Time :  "+ m.toFixed(1)  + "   " + classificacao(m))
}

//to fixed  = deixa apenas 1 casa decimail depois da virgula