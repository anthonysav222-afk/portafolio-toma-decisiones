/* Marca en azul la opción del menú de la sección que se está viendo */
const enlaces = document.querySelectorAll(".menu a");
const secciones = [...enlaces].map(a => document.querySelector(a.getAttribute("href")));

const observador = new IntersectionObserver(entradas => {
  entradas.forEach(e => {
    if (e.isIntersecting) {
      enlaces.forEach(a => {
        a.classList.toggle("activo", a.getAttribute("href") === "#" + e.target.id);
      });
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

secciones.forEach(s => { if (s) observador.observe(s); });