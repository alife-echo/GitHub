/*
function criarAluno(nome,nota1,nota2,nota3,nota4){

    return{
        name:nome,
        n1:nota1,           //colocou todos os valores para serem acessado de um só vez  é colocou a media como function pq não podia ter dois return
        n2:nota2,
        n3:nota3,
        n4:nota4,
        media:function() {
            return(this.n1 + this.n2 + this.n3+this.n4)/4
        }    
    }
}


var turma = [
    criarAluno("Álife",4,10,9,8),
    criarAluno("Julia",8,5,4,8),
    criarAluno("Rafaela",4,10,9,8,)
]

console.log(
    
    "Seu nome : " + turma[0].name + "  Suas notas : "+turma[0].n1,turma[0].n2,turma[0].n3,turma[0].n4+" Sua media : "+turma[0].media()
    )

    */

 function calcmedia(){

    return (this.n1 + this.n2 + this.n3 +this.n4)/4;
 }

    function criarAluno(nome,nota1,nota2,nota3,nota4){

        return{
           nome:nome,
           n1 : nota1,
           n2 :  nota2,
           n3 :  nota3,
           n4 : nota4,
           media:calcmedia
           
        }

    }

   var a = criarAluno("Álife",10,7,9,9)

   console.log(a,a.media())

var students = ["Jõao","Jennifer","Camarga"];


for(let index of students){
    console.log(students[0])
}