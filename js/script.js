/* ===== NAVBAR SCROLL ===== */
const navbar = document.querySelector(".navbar");
function navbarEffect() {
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", navbarEffect);

/* ===== SCROLL SUAVE ANCLAS INTERNAS ===== */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (
      !window.location.href.includes("index.html") &&
      window.location.pathname !== "/"
    )
      return;

    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    e.preventDefault();
    const navbarHeight = navbar.offsetHeight;
    window.scrollTo({
      top: target.offsetTop - navbarHeight,
      behavior: "smooth",
    });
  });
});

/* ===== CERRAR MENÚ CELULAR ===== */
const navLinks = document.querySelectorAll(".nav-link");
const menu = document.querySelector(".navbar-collapse");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menu && menu.classList.contains("show")) {
      new bootstrap.Collapse(menu).hide();
    }
  });
});

/* ===== LINK ACTIVO ===== */
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  let currentSection = "";
  sections.forEach((section) => {
    if (document.querySelector(`.nav-link[href="#${section.id}"]`)) {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop)
        currentSection = section.getAttribute("id");
    }
  });
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSection)
      link.classList.add("active");
  });
});



/* ===== AJUSTE DINÁMICO NAVBAR ===== */
function ajustarNavbar() {
  document.documentElement.style.setProperty(
    "--nav-height",
    navbar.offsetHeight + "px",
  );
}
window.addEventListener("load", ajustarNavbar);
window.addEventListener("resize", ajustarNavbar);
