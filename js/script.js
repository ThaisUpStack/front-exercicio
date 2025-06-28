
  function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem");

    if (mensagem.style.display === "none" || mensagem.innerText === "") {
      mensagem.innerText = "O sucesso é a soma de pequenos esforços repetidos dia após dia!";
      mensagem.style.display = "block"; 
    } else {
      mensagem.innerText = "";
      mensagem.style.display = "none"; 
    }
  }
