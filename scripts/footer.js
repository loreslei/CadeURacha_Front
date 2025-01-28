fetch("footer.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("footer").innerHTML = html;
    })
    .catch(err => console.error("Erro ao carregar a navbar:", err));