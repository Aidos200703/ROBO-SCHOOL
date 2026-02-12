const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");
const cancel = document.getElementById("cancel");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  cancel.classList.add("active");
  document.body.classList.add("active");
});

cancel.addEventListener("click", () => {
  document.body.classList.remove("active");
  menu.classList.remove("active");
});
