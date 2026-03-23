document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".topbar");

  if (header && !header.classList.contains("topbar-solid")) {
    const handleHeaderScroll = () => {
      if (window.scrollY > 30) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    handleHeaderScroll();
    window.addEventListener("scroll", handleHeaderScroll);
  }

  const revealElements = document.querySelectorAll(".reveal");

  if (revealElements.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05});

    revealElements.forEach((el) => observer.observe(el));
  }

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.getElementById("siteNav");

if (menuToggle && siteNav) {
  const navLinks = siteNav.querySelectorAll("a");

  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("nav-open");

    menuToggle.classList.toggle("active", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("nav-open");
      menuToggle.classList.remove("active");
      document.body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}
});