
function imc(altura,peso) {
    return alert(`tu IMC es de ${peso/(altura**2)}`);
}

function factorial(numero) {
    if (numero === 0 || numero === 1)
    return 1;
  for (var i = numero - 1; i >= 1; i--) {
    numero *= i;
  }
  return alert(numero);
}
  

imc(1.71,76);
factorial(5);