const navOverlay = document.getElementById("full_nav");
const navOpenButton = document.getElementById("nav");
const navCloseButton = document.getElementById("closebtn");

navOpenButton.addEventListener("click", function() {
  navOverlay.classList.add("overlay__visible");
});

navCloseButton.addEventListener("click", function() {
  navOverlay.classList.remove("overlay__visible");
});
