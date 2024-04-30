document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('[data-hamburger-menu-open]');
  const closeHamb = document.querySelector('[data-hamburger-menu-close]');

  const headerNav = document.querySelector('[data-header-nav]');

  const logo = document.querySelector('[data-logo]');
  console.log(headerNav);

  const topbar = document.querySelector('[data-header-topbar');
  const bottomBar = document.querySelector('[data-header-bottom-bar');

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
