// script.js
document.getElementById("orcamentoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
  
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const servico = document.getElementById("servico").value;
    const mensagem = document.getElementById("mensagem").value;
  
    if (!nome || !email || !servico) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
  
    alert(`Obrigado, ${nome}! Seu orçamento para "${servico}" foi enviado com sucesso.`);
    // Aqui você pode integrar com um backend para salvar os dados.
  });
  