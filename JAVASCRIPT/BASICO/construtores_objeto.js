/*
function criarAluno(nome,n1,n2){
    return{
        nome:nome,  
        nota1:n1,
        nota2:n2,
        media:function(){
            return(this.nota1+this.nota2)/2
        }


    }
}


var turma = [
  criarAluno("Álife",9,5),
  criarAluno("Silva",10,4),
  criarAluno("Marcela",4,6)
]

var aluno = turma[1];

turma.forEach(function(elemento){ // forEach  = varre é mostra todos os elementos do array

console.log(elemento)
    
})  



*/


/*

function aluno(nome,n1,n2){
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;                                      

   this.media =  function (){
        return (this.nota1 + this.nota2)/2
    }


}

var a = new aluno("álife",8,7)      // -----> instanciando um objeto
console.log(a.media());


*/