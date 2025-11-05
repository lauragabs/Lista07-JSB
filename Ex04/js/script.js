function iniciarContagem() {
  const tempoInput = document.getElementById("tempoInput");
  const mensagem = document.getElementById("mensagem");

  let segundos = Number.parseInt(tempoInput.value);

  if (Number.isNaN(segundos) || segundos <= 0) {
    alert("Por favor, digite um número válido maior que zero.");
    return;
  }

  mensagem.textContent = `Por favor, aguarde ${segundos} segundos para carregar a página do Google`;

  const intervalo = setInterval(() => {
    segundos--;

    if (segundos > 0) {
      mensagem.textContent = `Por favor, aguarde ${segundos} segundos para carregar a página do Google`;
    } else {
      clearInterval(intervalo);
      mensagem.textContent = "Carregando Google...";
      globalThis.location.href = "https://www.google.com";
    }
  }, 1000); // 1000ms = 1 segundo
}

document
  .getElementById("iniciarBtn")
  .addEventListener("click", iniciarContagem);
