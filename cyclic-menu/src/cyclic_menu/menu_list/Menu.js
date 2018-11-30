import MenuItem from './Menu_item';

class Menu {
    constructor(container, itemsList, { menuId, classNames }) {
        this.container = container;
        this.menuElement = this.createMenu(menuId, classNames.menuContainer);
        this.createMenuItems(itemsList, classNames);
    }

    createMenu(menuId, menuClass) {
        const element = document.createElement('nav');
        element.id = menuId;
        element.classList.add(menuClass);
        this.container.appendChild(element);
        return element;
    }

    createMenuItems(itemsList, classNames) {
        const fragment = document.createDocumentFragment();
        let firstItem;
        let currentItem = null;
        itemsList.forEach((it, ind, arr) => {
            const menuItem = new MenuItem(it, classNames);
            if (currentItem) {
                menuItem.setPrevious(currentItem);
                currentItem.setNext(menuItem);
            } else {
                this.activeItem = menuItem;
                this.activeItem.toggleActive();
                firstItem = menuItem;
            }
            currentItem = menuItem;
            if (ind === arr.length - 1) {
                menuItem.setNext(firstItem);
                firstItem.setPrevious(menuItem);
            }
            fragment.appendChild(menuItem.element);
        });
        this.menuElement.appendChild(fragment);
    }

    nextItem() {
        this.changeItem(this.activeItem.getNext());
    }

    previousItem() {
        this.changeItem(this.activeItem.getPrevious());
    }

    changeItem(nextItem) {
        this.activeItem.toggleActive();
        this.activeItem = nextItem;
        this.activeItem.toggleActive();
    }

    getActiveItemInfo() {
        return this.activeItem.getInfo();
    }

    removeActive() {
        if (!this.activeItem) {
            return;
        }
        const nextElement = this.activeItem.getNext();
        this.activeItem.remove();
        if (nextElement === this.activeItem) {
            this.activeItem = null;
            return;
        }
        this.activeItem = nextElement;
        this.activeItem.toggleActive();
    }

    removeAll() {
        while (this.activeItem) {
            this.removeActive();
        }
    }

    destroy() {
        this.removeAll();
        this.menuElement.remove();
        this.menuElement = null;
    }
}

export default Menu;
