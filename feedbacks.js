// script.js
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
  
    const nome = document.getElementById("nome").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
  
    if (!nome || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    // Cria um novo feedback
    const feedbackItem = document.createElement("li");
    feedbackItem.innerHTML = `
      <span class="nome">${nome}</span>: 
      <span class="mensagem">${mensagem}</span>
    `;
  
    // Adiciona o feedback na lista
    document.getElementById("listaFeedbacks").appendChild(feedbackItem);
  
    // Limpa o formulário
    document.getElementById("feedbackForm").reset();
  
    alert("Obrigado pelo seu feedback!");
  });
  