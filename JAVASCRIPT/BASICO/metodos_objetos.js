/*
var aluno = {

    nome: "Igor",
    notas: [5, 9],
    // metodos são ações de um objeto ---> metodos em javascript são funções
    media: function (n1, n2) {
        return (n1 + n2) / 2;
    }


}
// mais sé a formula da media mudar ? tera que mudar a formula nas funções,mas se tiver 50 alunos ?
// use uma função global em que os objetos acessem ela
var aluno1 = {

    nome: "Álife",
    notas: [8, 9],
    // metodos são ações de um objeto ---> metodos em javascript são funções
    media: function (n1, n2) {
        return (n1 + n2) / 2;
    }


}


console.log(aluno.nome)
console.log(aluno.media(aluno.notas[0], aluno.notas[1]))

console.log(aluno1.nome)
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]))

*/


/*
function calcmedia(n1, n2){
    return (n1 + n2) / 2;    //agora sé voce quiser mudar a formula fica mais facil,do que mudar a formula de aluno por aluno
}
*/
//this = faz com que a função acessa os valores de uma propriedade
function calcmedia(){
    return(this.notas[0]+ this.notas[1])/2 // maneira de accesar a propriedade notas atraves do this é da função
}


var aluno2 = {
    nome: "Igor",
    notas: [5, 9], 
    media : calcmedia
   
}



var aluno3 = {
    nome: "Álife",
    notas: [8, 9],
    media : calcmedia
}


console.log(aluno2.nome)
console.log(aluno2.media()) 
console.log(aluno3.nome)
console.log(aluno3.media())
