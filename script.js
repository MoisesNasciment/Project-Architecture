document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio para o servidor
    alert("Formulário enviado com sucesso!");
});