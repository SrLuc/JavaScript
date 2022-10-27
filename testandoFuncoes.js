const NomesParaTestar = [
    "gabriel berenguer",
    "ruan rickelme",
    "maria eduarda",
    "alvaro vitor",
    "marcelo teles",
    "alexandre fernandes",
    "alessandra oliveira",
    "hannha quites",
    "maria gonçalves",
    "geovana victoria",
    "mateus diamente",
    "paulo vitor",
    "artu silva",
    "walter cabral",
    "igor nascimento",
    "marcos ferreira",
    "joao victor",
    "robson pereira",
    'maria do carmo',
    'severino ramos',
    'luiz rodrigo',
    'rawandersson guilherme',
    'rafael pereira',
    'ricardo pereira',
    'karina rafalea',
    'tiago rafale',
    'bruno leonardo',
  ];
  
  const NumerosParaTestar = 
  [
      10, 20, 30, 15, 25, 35,
      5,  10, 15, 20, 25, 30,
      40, 50, 60, 70, 80, 90
  ];
  
  
  const BoleanosParaTestar =
  [
      true, true, false, true, false,
      false, false, false, true, true
  ];
  
  const NomeCaixaAlta = NomesParaTestar.map(nomes => nomes.toUpperCase());
  //console.log(NomeCaixaAlta);
  
  const dividirPor2 = NumerosParaTestar.map(numero => numero /=2);
  //console.log(dividirPor2);
  
  const inverter = BoleanosParaTestar.map(elemento => !elemento);
  //console.log(inverter);
  
  const quadradoPerfeito = NumerosParaTestar.map(numero => numero * numero);
  //console.log(quadradoPerfeito);
  
  const filtarNomes = NomesParaTestar.filter(pessoa => pessoa[1] == 'A');
  //console.log(filtarNomes);
  
  const apartirDe = NomesParaTestar.filter((elemento, index) => index > 10);
  //console.log(apartirDe);
  
  const podio = NomesParaTestar.filter((nomes, index) => index < 3 );
  //console.log(podio);
  
  const numerosPares = NumerosParaTestar.filter(numero => numero % 2 === 0);
  //console.log(numerosPares);
  
  const numerosImpares = NumerosParaTestar.filter(numero => numero % 3 === 0);
  //console.log(numerosImpares);
  
  const quantasVerdades = BoleanosParaTestar.filter(elementos => elementos == true);
  //console.log(quantasVerdades + " : " + quantasVerdades.length + " Verdades");
  
  const quantasMentiras = BoleanosParaTestar.filter(elemento => elemento == false);
  //console.log(quantasMentiras + " : " + quantasMentiras.length + " Mentiras");
  
  const quantosNomesCadastrados = NomesParaTestar.filter(nomes => nomes.length);
  //console.log(quantosNomesCadastrados.length-1);
  
  const quantosNumeroParaTestar = NumerosParaTestar.filter(numero => numero);
  //console.log(quantosNumeroParaTestar.length);

  const somarNumero = NumerosParaTestar.reduce((element, element1) => element + element1);
  //console.log(somarNumero);

  const saberMedia = NumerosParaTestar.reduce((prev, curr) => prev+curr);
  //console.log(saberMedia/NumerosParaTestar.length);

  