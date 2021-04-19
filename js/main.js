function collapseMenu() {
    let menu = document.getElementById('menu-bar');
    let menuInfo = document.getElementById('protection-menu');

    menu.classList.add('collapsed');
    menu.setAttribute('aria-expanded', 'false');
    menuInfo.classList.remove('show');
    menuInfo.classList.remove('collapsing');
}