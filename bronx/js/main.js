// ===================================================================
// THE JEMBRONG — main.js
// Dipakai di semua halaman publik.
// ===================================================================

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.navbar-toggle');
  var menu = document.querySelector('.navbar-mobile-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
      var isOpen = menu.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
});
