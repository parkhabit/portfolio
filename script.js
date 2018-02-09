const navOverlay = document.getElementById("full_nav");
const navOpenButton = document.getElementById("nav");
const navCloseButton = document.getElementById("closebtn");
const about_link = document.getElementById("about__link");
const project_link = document.getElementById("project__link");
const contact_link = document.getElementById("contact__link");

navOpenButton.addEventListener("click", function() {
  navOverlay.classList.add("overlay__visible");
});

navCloseButton.addEventListener("click", function() {
  navOverlay.classList.remove("overlay__visible");
});

about_link.addEventListener("click", function() {
  navOverlay.classList.remove("overlay__visible");
});

project_link.addEventListener("click", function() {
  navOverlay.classList.remove("overlay__visible");
});

contact_link.addEventListener("click", function() {
  navOverlay.classList.remove("overlay__visible");
});
