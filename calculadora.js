//calculadora em javascript

function calcular(numero1, numero2) {
  var n1 = 0,
      n2 = 0;
  var result;
  for (let i = 0; i < 10; i++) {
    n1++, n2++;
    result = n1 * n2;
    console.log(n1 + "X" + n2 + "=" + result);
  }
}

calcular();
