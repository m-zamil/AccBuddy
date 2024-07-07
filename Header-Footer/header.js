document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('[data-hamburger-menu-open]');
  const closeHamb = document.querySelector('[data-hamburger-menu-close]');

  const headerNav = document.querySelector('[data-header-nav]');

  hamburger.addEventListener('click', () => {
    hamburger.style.display = 'none';
    closeHamb.style.display = 'inline-block';
    headerNav.style.display = 'block';
  });
  closeHamb.addEventListener('click', () => {
    hamburger.style.display = 'inline-block';
    closeHamb.style.display = 'none';
    headerNav.style.display = 'none';
  });
});
