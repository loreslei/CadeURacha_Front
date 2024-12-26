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
