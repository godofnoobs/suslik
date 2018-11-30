import MenuList from '../menu_list/Menu';
import itemsList from '../config/menu_items_list';

class MenuController {
    constructor(config, container) {
        this.controls = config.controls;
        this.config = config;
        this.container = container;
        this.keyBoardDelay = false;
        this.handlerDecorator = this.throttle(this.handlerKeyboard).bind(this);
        this.createMenu(this.config);
    }

    createMenu(config = this.config) { // can be convert to async request
        const menuItemsList = this.getMenuList();
        this.menu = new MenuList(this.container, menuItemsList, config);
        this.container.addEventListener('keydown', this.handlerDecorator);
    }

    getMenuList() {
        return itemsList; // can be convert to async request
    }

    throttle(func, limit = this.config.keyboardDelayTime) {
        let lastFunc;
        let lastRan;
        return function throttleRun(...args) {
            const context = this;
            if (!lastRan) {
                func.apply(context, args);
                lastRan = Date.now();
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(() => {
                    if ((Date.now() - lastRan) >= limit) {
                        func.apply(context, args);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        };
    }

    handlerKeyboard(ev) {
        this.keyBoardDelay = true;
        if (this.controls.nextItem.includes(ev.keyCode)) {
            this.menu.nextItem();
        } else if (this.controls.previousItem.includes(ev.keyCode)) {
            this.menu.previousItem();
        } else if (this.controls.action.includes(ev.keyCode)) {
            this.action(this.menu.getActiveItemInfo());
        }
    }

    // should be redefined after inheritance
    action(info) {
        window.open(info.attr.href, '_blank');
    }

    destroy() {
        this.menu.destroy();
        this.container.removeEventListener('keydown', this.handlerDecorator);
    }
}

export default MenuController;
