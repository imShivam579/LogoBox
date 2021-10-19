const burgerIcon = document.getElementById("burger-menu-icon");
const close_Burger_menu_icon = document.getElementById("close-burger-menu-btn");
const burgerMenu = document.getElementById("burger-menu-wrapper");
burgerIcon.addEventListener("click", () => {
  burgerMenu.classList.add("active");
});
close_Burger_menu_icon.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
});
