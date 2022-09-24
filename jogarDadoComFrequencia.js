/*

A probabilidade de dar um valor em um dado é 1/6 (uma em 6). Faça um script em JavaScript que simule 1 milhão de lançamentos de dados e mostre a frequência que deu para cada número.

*/
function jogarDado() 
{
  
/*
  var frequenciaDeUm = 0;
  var frequenciaDeDois = 0;
  var frequenciaDeTres = 0;
  var frequenciaDeQuatro = 0;
  var frequenciaDeCinco = 0;
  var frequenciaDeSeis = 0;
*/
  
  const frequencia = [0,0,0,0,0,0];
  

  
  for (let i = 0 ; i < 1000 ; i++)
    {
      var valorDoDado = (Math.floor(Math.random() * 6 + 1));
      //console.log(valorDoDado);
      
      if (valorDoDado === 1)
      {
        frequencia[0] === frequencia[0]++;
      }
        
      else if (valorDoDado === 2)
      {
        frequencia[1] === frequencia[1]++;
      }

      else if (valorDoDado === 3)
      {
        frequencia[2] === frequencia[2]++;
      }

      else if (valorDoDado === 4)
      {
        frequencia[3] === frequencia[3]++;
      }

      else if (valorDoDado === 5)
      {
        frequencia[4] === frequencia[4]++;
      }

      else if (valorDoDado === 6)
      {
        frequencia[5] === frequencia[5]++;
      }
      
      
    }
  /*
    console.log("Frequencia do Numero 1 : " + frequencia[0]);
    console.log("Frequencia do Numero 2 : " + frequencia[1]);
    console.log("Frequencia do Numero 3 : " + frequencia[2]);
    console.log("Frequencia do Numero 4 : " + frequencia[3]);
    console.log("Frequencia do Numero 5 : " + frequencia[4]);
    console.log("Frequencia do Numero 6 : " + frequencia[5]);
  */
  
    var numero = 0;
    for (let x = 0 ; x <= 5 ; x++)
    {
      numero++;
      console.log("Frequencia do Numero " +numero+ ":" +frequencia[x]);
    }
}


jogarDado();
