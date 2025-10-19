// Funções de navegação entre páginas
function irPara(pagina) {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = pagina;
  }, 300);
}

function irParaAnterior(pagina) {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = pagina;
  }, 300);
}

// Efeito de transição suave
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

// Modo escuro/claro
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  });

  // Carregar preferência salva
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
  }
}

// Botão "voltar ao topo"
const backToTop = document.getElementById("backToTop");
if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 200 ? "block" : "none";
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Animação ao rolar (scroll reveal)
const reveals = document.querySelectorAll(".reveal");
function revelarAoRolar() {
  for (let el of reveals) {
    const posicao = el.getBoundingClientRect().top;
    if (posicao < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  }
}
window.addEventListener("scroll", revelarAoRolar);
revelarAoRolar();
