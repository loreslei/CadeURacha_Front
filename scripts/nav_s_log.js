fetch("navbar_sem_log.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("navbar").innerHTML = html;
    })
    .catch(err => console.error("Erro ao carregar a navbar:", err));