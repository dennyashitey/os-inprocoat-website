document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("mobile-menu");
  const links = document.querySelector("ul.links");

  menuToggle.addEventListener("click", function () {
    links.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item h3");

  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      const parent = item.parentElement;
      parent.classList.toggle("active");
    });
  });
});
