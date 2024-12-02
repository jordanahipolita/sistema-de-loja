// script.js
document.addEventListener("DOMContentLoaded", function () {
    const historicoCompras = [
      { data: "2024-11-01", produto: "Notebook", quantidade: 1, precoTotal: 3500.0 },
      { data: "2024-11-15", produto: "Mouse Gamer", quantidade: 2, precoTotal: 200.0 },
      { data: "2024-11-20", produto: "Monitor 27\"", quantidade: 1, precoTotal: 1200.0 },
    ];
  
    const tabelaBody = document.querySelector("#historicoCompras tbody");
  
    // Função para formatar números como moeda
    function formatarMoeda(valor) {
      return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    }
  
    // Preenche a tabela com os dados
    historicoCompras.forEach(compra => {
      const linha = document.createElement("tr");
  
      linha.innerHTML = `
        <td>${compra.data}</td>
        <td>${compra.produto}</td>
        <td>${compra.quantidade}</td>
        <td>${formatarMoeda(compra.precoTotal)}</td>
      `;
  
      tabelaBody.appendChild(linha);
    });
  });
  