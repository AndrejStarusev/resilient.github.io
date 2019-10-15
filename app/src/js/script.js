// ==== menu
const burger = document.getElementById('burger');
const menu = document.getElementById('mobile-menu');

function toggleMenu() {
    const active = 'active';

    this.classList.toggle(active);
    menu.classList.toggle(active);
}

burger.addEventListener('click', toggleMenu);