document.addEventListener("click", (event) => {
  
  const toggleButton = event.target.closest("[data-bs-toggle='collapse']");
  if (toggleButton) {
    const targetId = toggleButton.getAttribute("data-bs-target"); // ID do colapsável alvo

    
    document.querySelectorAll(".collapse.show").forEach((collapse) => {
      console.log(collapse.id); 
      if (collapse.id !== targetId.substring(1)) {
        new bootstrap.Collapse(collapse).hide(); 
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".arrow").forEach(arrow => {
      arrow.addEventListener("click", function () {
          let agrupador = this.closest("#Agrupador"); // Encontra o agrupador correto
          let container = agrupador.querySelector(".container .row"); // Seleciona a div correta
          let scrollAmount = 300; // Distância do scroll

          if (this.classList.contains("bx-chevron-left")) {
              container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
          } else {
              container.scrollBy({ left: scrollAmount, behavior: "smooth" });
          }
      });
  });
});
