let nomes = [];
let quantidadeNomes = 0;

function iniciar() {
  const quantidadeInput = document.getElementById("quantidadeInput");
  const inputArea = document.getElementById("inputArea");

  quantidadeNomes = Number.parseInt(quantidadeInput.value);

  if (Number.isNaN(quantidadeNomes) || quantidadeNomes <= 0) {
    alert("Por favor, digite um número válido maior que zero.");
    return;
  }

  nomes = [];
  inputArea.innerHTML = "";

  for (let i = 0; i < quantidadeNomes; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Nome ${i + 1}`;
    input.id = `nome${i}`;
    inputArea.appendChild(input);
    inputArea.appendChild(document.createElement("br"));
  }

  const botaoExibir = document.createElement("button");
  botaoExibir.textContent = "Exibir Nomes";
  botaoExibir.onclick = coletarNomes;
  inputArea.appendChild(botaoExibir);
}

function coletarNomes() {
  nomes = [];

  for (let i = 0; i < quantidadeNomes; i++) {
    const nome = document.getElementById(`nome${i}`).value.trim();
    if (nome !== "") {
      nomes.push(nome);
    }
  }

  if (nomes.length === 0) {
    alert("Por favor, digite pelo menos um nome.");
    return;
  }

  exibirNomes();
}

function exibirNomes() {
  const nomesDiv = document.getElementById("nomes");
  nomesDiv.innerHTML = "";

  let indice = 0;

  const intervalo = setInterval(() => {
    const nomeDiv = document.createElement("div");
    nomeDiv.textContent = nomes[indice];
    nomesDiv.appendChild(nomeDiv);

    indice++;

    if (indice >= nomes.length) {
      clearInterval(intervalo);
    }
  }, 1000);
}

document.getElementById("iniciarBtn").addEventListener("click", iniciar);
