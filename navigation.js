const header = document.querySelector(".header");
const burger = document.querySelector(".header_burger");

burger.addEventListener("click", () => {
  header.classList.toggle("nav_open");
});
