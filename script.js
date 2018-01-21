let navClose = document.getElementById('nav');
let navOverlay = document.getElementById('full_nav');
let navOpen = document.getElementById('nav');


navOpen.addEventListener('click', function() {
  navOverlay.classList.add('overlay__visible')
});

navClose.addEventListener('click', function() {
    navOverlay.classList.remove('overlay__visible');
});
