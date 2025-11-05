function transferirTexto() {
  const caixa1 = document.getElementById("caixaTexto1");
  const caixa2 = document.getElementById("caixaTexto2");

  const texto = caixa1.value;

  setTimeout(() => {
    caixa1.value = "";
    caixa2.value = texto;
  }, 2000);
}

document
  .getElementById("transferirBtn")
  .addEventListener("click", transferirTexto);
