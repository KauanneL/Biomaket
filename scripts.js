<script>
  window.addEventListener("load", function() {
    alert("As imagens são ilustrativas e foram criadas pelos alunos");
  });
</script>

// Theme toggle + persistence
const root = document.documentElement;
const themeBtn = () => document.querySelectorAll('[data-toggle-theme]');
function setTheme(t){
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
  updateToggleUI(t);
}
function updateToggleUI(t){
  document.querySelectorAll('[data-toggle-theme]').forEach(el=>{
    el.innerText = t === 'dark' ? '🌙 Dark' : '☀️ Light';
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  // restore theme
  const saved = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  setTheme(saved);

  // attach toggle
  document.querySelectorAll('[data-toggle-theme]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  });

  // mobile menu toggle
  const hamb = document.getElementById('hamb');
  hamb && hamb.addEventListener('click', ()=>{
    const nav = document.getElementById('mainnav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '64px';
    nav.style.right = '18px';
    nav.style.background = getComputedStyle(document.body).background;
    nav.style.padding = '12px';
    nav.style.borderRadius = '10px';
    nav.style.gap = '6px';
    nav.style.boxShadow = '0 8px 20px rgba(2,6,23,0.12)';
  });

  // active link highlight
  const links = document.querySelectorAll('.nav a');
  links.forEach(a=>{ if(a.href === location.href || (a.getAttribute('href') === location.pathname.split('/').pop())) a.classList.add('active'); });

  // reveal on scroll
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

  // small interactive: click on image to zoom
  document.querySelectorAll('.media img').forEach(img=>{
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', ()=>{
      const overlay = document.createElement('div');
      overlay.style.position='fixed';overlay.style.inset=0;overlay.style.background='rgba(0,0,0,0.75)';overlay.style.display='flex';
      overlay.style.alignItems='center';overlay.style.justifyContent='center';overlay.style.zIndex=2000;
      const big = img.cloneNode(); big.style.maxWidth='92%'; big.style.maxHeight='92%'; big.style.borderRadius='10px';
      overlay.appendChild(big);
      overlay.addEventListener('click', ()=>overlay.remove());
      document.body.appendChild(overlay);
    });
  });

  const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTop.classList.add("show");
  } else {
    btnTop.classList.remove("show");
  }
});

btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

});
