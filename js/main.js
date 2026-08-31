const nav = document.getElementById("nav");
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 24);
});

const menu = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", String(!open));
  links.style.display = open ? "" : "flex";
  if (!open) {
    links.style.position = "absolute";
    links.style.top = "76px";
    links.style.left = "0";
    links.style.right = "0";
    links.style.padding = "22px";
    links.style.background = "rgba(11,11,16,.97)";
    links.style.flexDirection = "column";
    links.style.gap = "18px";
  }
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", () => {
    if (window.innerWidth <= 900) {
      links.style.display = "";
      menu.setAttribute("aria-expanded", "false");
    }
  });
});

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    const selected = button.dataset.filter;
    document.querySelectorAll(".filter-card").forEach(card => {
      const show = selected === "all" || card.dataset.category === selected;
      card.classList.toggle("is-hidden", !show);
    });
  });
});
