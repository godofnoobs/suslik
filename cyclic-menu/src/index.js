import addCustomMenu from './cyclic_menu/cyclic_menu';

function createMenu() {
    window.customMenuController = addCustomMenu(document.body);
    window.removeEventListener('DOMContentLoaded', createMenu);
}

window.addEventListener('DOMContentLoaded', createMenu);
