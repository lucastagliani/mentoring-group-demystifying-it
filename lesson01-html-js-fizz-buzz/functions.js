function escreveNoConsole() {
  console.log("Eu sou um código javascript!!!");
  console.warn("Eu sou um aviso, cuidado!");
}

function calculaFizzBuzz(numero) {
  if (numero % 3 == 0 && numero % 5 == 0) {
    return "FizzBuzz";
  }
  if (numero % 3 == 0) {
    return "Fizz";
  }
  if (numero % 5 == 0) {
    return "Buzz";
  }
  return numero;
}

function geraFizzBuzz() {
  var resultado = "";
  for (var i = 1; i <= 100; i++) {
    resultado = resultado + "\r\n " + calculaFizzBuzz(i);
  }
  document.getElementById("elemento_resultado").innerText = resultado;
}
