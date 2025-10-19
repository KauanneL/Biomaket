// script.js — interações do site científico

// ===========================
// 1️⃣ Botão voltar ao topo
// ===========================
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = "↑ Topo";
backToTopBtn.className = "btn";
backToTopBtn.style.position = "fixed";
backToTopBtn.style.right = "20px";
backToTopBtn.style.bottom = "20px";
backToTopBtn.style.display = "none";
backToTopBtn.style.zIndex = "1000";
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

window.addEventListener('scroll', () => {
  if(window.scrollY > 200){
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// ===========================
// 2️⃣ Destacar link ativo na navbar
// ===========================
const navbarLinks = document.querySelectorAll('.navbar a');
const currentPage = window.location.pathname.split("/").pop();

navbarLinks.forEach(link => {
  if(link.getAttribute('href') === currentPage){
    link.style.background = "var(--accent)";
    link.style.color = "#fff";
  }
});

// ===========================
// 3️⃣ Fade-in nos cards ao rolar
// ===========================
const faders = document.querySelectorAll('.card');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.style.opacity = 1;
    entry.target.style.transform = "translateY(0px)";
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
  appearOnScroll.observe(card);
});
