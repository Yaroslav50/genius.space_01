const mobileMenu = document.querySelector(".mobile-menu");
const bodyElem = document.body;

const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");
const toggleLock = () => bodyElem.classList.toggle("lock");

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnOpen.addEventListener("click", toggleLock);
menuBtnClose.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleLock);
