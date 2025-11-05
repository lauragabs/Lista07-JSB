function exibirNome() {
  const nomeInput = document.getElementById("nomeInput");
  const nomeDisplay = document.getElementById("nomeDisplay");

  const nome = nomeInput.value.trim();

  if (nome === "") {
    alert("Por favor, digite seu nome completo.");
    return;
  }

  nomeDisplay.textContent = nome;
  nomeDisplay.style.fontSize = "14px";

  let tamanhoAtual = 14;

  const intervalo = setInterval(() => {
    tamanhoAtual += 2;
    nomeDisplay.style.fontSize = tamanhoAtual + "px";

    if (tamanhoAtual >= 40) {
      clearInterval(intervalo);
    }
  }, 500); // 500ms = 0.5 segundos
}

document.getElementById("exibirBtn").addEventListener("click", exibirNome);
