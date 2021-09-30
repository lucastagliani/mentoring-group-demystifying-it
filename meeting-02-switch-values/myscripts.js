console.log("Eu sou o arquivo JS e eu estou carregado na página!");

document.getElementById("txtEntrada1").value = "luisa";
document.getElementById("txtEntrada2").value = "eduardo";

function executaTrocaDeValores() {
  console.log("Você clicou no botão!!!! XUXU BELEZA!!!!");

  var variavel = document.getElementById("txtEntrada1").value;
  document.getElementById("txtEntrada1").value = document.getElementById("txtEntrada2").value;
  document.getElementById("txtEntrada2").value = variavel;
}
