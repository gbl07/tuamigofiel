window.onscroll = function () {
   scroll = document.documentElement.scrollTop;
   header = document.getElementById("header");

   if (scroll > 20) {
      header.classList.add("nav_animate");
   } else if (scroll < 20) {
      header.classList.remove("nav_animate");
   }
};

menu = document.getElementById("header");

nav = document.getElementById("nav");

document.getElementById("btn__toggle").addEventListener("click", mostrarMenu);

function mostrarMenu() {
   menu.classList.toggle("show__nav");
   nav.classList.toggle("toggle__nav");
}

