function transferirTexto() {
  const caixa1 = document.getElementById("caixaTexto1");
  const caixa2 = document.getElementById("caixaTexto2");
  const tempoSelect = document.getElementById("tempoSelect");

  const texto = caixa1.value;
  const tempo = tempoSelect.value * 1000;

  setTimeout(() => {
    caixa1.value = "";
    caixa2.value = texto;
  }, tempo);
}

document
  .getElementById("transferirBtn")
  .addEventListener("click", transferirTexto);
