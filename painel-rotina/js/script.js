document.addEventListener("DOMContentLoaded", () => {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const list = document.createElement("ul");

  // Configurar o formulário
  input.type = "text";
  input.placeholder = "Adicione uma tarefa...";
  button.textContent = "Adicionar";
  form.appendChild(input);
  form.appendChild(button);

  // Adicionar o formulário e a lista ao painel
  const painel = document.querySelector(".painel");
  painel.appendChild(form);
  painel.appendChild(list);

  // Evento para adicionar tarefa
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = input.value.trim();
    if (taskText) {
      const li = document.createElement("li");
      const span = document.createElement("span");
      const completeBtn = document.createElement("button");
      const deleteBtn = document.createElement("button");

      span.textContent = taskText;
      completeBtn.textContent = "✔";
      deleteBtn.textContent = "❌";

      li.appendChild(span);
      li.appendChild(completeBtn);
      li.appendChild(deleteBtn);
      list.appendChild(li);

      // Marcar como concluída
      completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
      });

      // Remover tarefa
      deleteBtn.addEventListener("click", () => {
        list.removeChild(li);
      });

      // Limpar o campo de entrada
      input.value = "";
    }
  });
});



