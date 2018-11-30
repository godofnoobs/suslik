import config from './config/config';
import MenuController from './controller/MenuController';
import './styles/cyclic_menu.css';

function addCustomMenu(container) {
    return new MenuController(config, container);
}

export default addCustomMenu;
