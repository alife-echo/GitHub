var d = new Date("04/12/2020 8:17");
          // Date()
         // dia/mês/ano --> horas

         /*
      4  Maneiras de criar datas 

      new Date()
-----------------------------------------------------------------
      new Date(year, month, day, hours, minutes, seconds, milliseconds)
      
      Example : new Date(2020,11,14,13,30,20,40)
       
-----------------------------------------------------------------
      new Date(milliseconds)
 
      Example  : new Date(371253165611) ---> esse valor vai corresponder á algum anos mes dia hora é segundo
-----------------------------------------------------------------

      new Date(date string)

      Example  new Date("sep 05  2017")

       or

       Example new Date("08 05 2017")

------------------------------------------------------------------

.toDateString() = deixa a data mais legivel

toUTCString() = converte a data em utc(padrão de exibição de data) ---> mais legal

getDate() = mostra o dia 
getDay() = mostra o dia da semana em numero baseado em array
getFullYear() = mostra o ano
getHours() = pega as horas
getMinutes() = pega os minutos
getSeconds() = pega os segundos   
getMonth() = pega o mês 
getTime() = mostra os milesegundos de 1970   
*/


var a = new Date(2020,09,26,17,30);
console.log(a.toUTCString())



/*

var b = new Date();
var dias_Semana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"]
console.log(dias_Semana[a.getDay()])

mostra o dia da semana pego em um array

*/var d = new Date("04/12/2020 8:17");
          // Date()
         // dia/mês/ano --> horas

         /*
      4  Maneiras de criar datas 

      new Date()
-----------------------------------------------------------------
      new Date(year, month, day, hours, minutes, seconds, milliseconds)
      
      Example : new Date(2020,11,14,13,30,20,40)
       
-----------------------------------------------------------------
      new Date(milliseconds)
 
      Example  : new Date(371253165611) ---> esse valor vai corresponder á algum anos mes dia hora é segundo
-----------------------------------------------------------------

      new Date(date string)

      Example  new Date("sep 05  2017")

       or

       Example new Date("08 05 2017")

------------------------------------------------------------------

.toDateString() = deixa a data mais legivel

toUTCString() = converte a data em utc(padrão de exibição de data) ---> mais legal

getDate() = mostra o dia 
getDay() = mostra o dia da semana em numero baseado em array
getFullYear() = mostra o ano
getHours() = pega as horas
getMinutes() = pega os minutos
getSeconds() = pega os segundos   
getMonth() = pega o mês 
getTime() = mostra os milesegundos de 1970   
*/


var a = new Date(2020,09,26,17,30);
console.log(a.toUTCString())



/*

var b = new Date();
var dias_Semana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"]
console.log(dias_Semana[a.getDay()])

mostra o dia da semana pego em um array

*/