// script.js
document.addEventListener("DOMContentLoaded", () => {
    const pedidos = [
      { id: 1, cliente: "João Silva", data: "25/11/2024", total: 150.00, status: "pendente" },
      { id: 2, cliente: "Maria Oliveira", data: "24/11/2024", total: 200.00, status: "concluido" },
      { id: 3, cliente: "Carlos Lima", data: "23/11/2024", total: 300.00, status: "processando" },
    ];
  
    const tabelaPedidos = document.querySelector("#tabelaPedidos tbody");
    const filtroForm = document.getElementById("filtroForm");
  
    // Função para renderizar pedidos na tabela
    const renderizarPedidos = (filtro = {}) => {
      tabelaPedidos.innerHTML = "";
  
      const pedidosFiltrados = pedidos.filter(pedido => {
        const clienteMatch = filtro.cliente ? pedido.cliente.toLowerCase().includes(filtro.cliente.toLowerCase()) : true;
        const statusMatch = filtro.status ? pedido.status === filtro.status : true;
        return clienteMatch && statusMatch;
      });
  
      pedidosFiltrados.forEach(pedido => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
          <td>${pedido.id}</td>
          <td>${pedido.cliente}</td>
          <td>${pedido.data}</td>
          <td>R$ ${pedido.total.toFixed(2)}</td>
          <td>${pedido.status.charAt(0).toUpperCase() + pedido.status.slice(1)}</td>
          <td>
            <button class="acao" data-id="${pedido.id}">Atualizar</button>
          </td>
        `;
        tabelaPedidos.appendChild(linha);
      });
    };
  
    // Lidar com filtros
    filtroForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const cliente = document.getElementById("cliente").value;
      const status = document.getElementById("status").value;
  
      renderizarPedidos({ cliente, status });
    });
  
    // Ações nos botões
    tabelaPedidos.addEventListener("click", (event) => {
      if (event.target.classList.contains("acao")) {
        const id = event.target.getAttribute("data-id");
        alert(`Atualizar pedido #${id}`);
      }
    });
  
    // Renderizar pedidos na inicialização
    renderizarPedidos();
  });
  