# ⏰ Lista 07 - JavaScript Básico - Temporizadores e Animações

## 🎯 **Objetivos de Aprendizagem**

- ✅ **setTimeout e setInterval**: Controle temporal de execução de código
- ✅ **Manipulação Dinâmica do DOM**: Transferência e animação de conteúdo
- ✅ **Interatividade Temporal**: Delays, contagens regressivas e animações automáticas

## 💻 **Novos Conceitos de JavaScript Abordados**

### ⏱️ **Temporizadores**

```javascript
// Delay único
setTimeout(() => {
  // Executa após X segundos
}, 2000); // Ex01 e Ex02: Transferência com delay

// Intervalo repetitivo
setInterval(() => {
  // Executa a cada X segundos
}, 500); // Ex03: Crescimento da fonte
```

### 🎨 **Animações e Transições**

```javascript
// Crescimento gradual de fonte
elemento.style.fontSize = tamanho + "px"; // Ex03: 14px → 40px

// Contagem regressiva
contador--; // Ex04: X segundos → 0
```

### 📝 **Arrays e Exibição Sequencial**

```javascript
// Armazenamento e exibição
const nomes = []; // Ex05: Coleta de nomes
setTimeout(() => exibirProximo(), 1000); // Exibição automática
```

## 📋 **Exercícios Implementados**

### 🔄 **Ex01 - Transferência Simples**

Transferência de texto entre caixas com delay fixo de 2 segundos.

### ⚙️ **Ex02 - Transferência Personalizável**

Transferência com tempo selecionável (1-10 segundos) pelo usuário.

### 📈 **Ex03 - Fonte Crescente**

Nome exibido com fonte que cresce automaticamente de 14px para 40px.

### ⏳ **Ex04 - Contagem Regressiva**

Contador personalizado para redirecionamento automático ao Google.

### 📝 **Ex05 - Lista Sequencial**

Coleta de N nomes e exibição automática com intervalo de 1 segundo.

---

**Desenvolvido como atividade acadêmica para aprendizado de JavaScript básico ⏰🚀**
