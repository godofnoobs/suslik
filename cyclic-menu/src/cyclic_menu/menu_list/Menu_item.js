class MenuItem {
    constructor(obj, { menuItem, menuItemActive }) {
        this.text = obj.text;
        this.attr = obj.attributes;
        this.active = !!obj.active;
        this.class = menuItem;
        this.classActive = menuItemActive;
        this.previous = null;
        this.next = null;
        this.element = this.createElement();
    }

    createElement() {
        const element = document.createElement('a');
        element.classList.add(this.class);
        if (this.active) {
            element.classList.add(this.classActive);
        }
        element.innerText = this.text;
        Object.keys(this.attr).forEach((it) => {
            element.setAttribute(it, this.attr[it]);
        });
        return element;
    }

    setPrevious(item) {
        this.previous = item;
    }

    setNext(item) {
        this.next = item;
    }

    getNext() {
        return this.next;
    }

    getPrevious() {
        return this.previous;
    }

    remove() {
        this.element.remove();
        this.element = null;
        this.previous.next = this.next;
        this.next.previous = this.previous;
    }

    toggleActive() {
        this.active = !this.active;
        this.element.classList.toggle(this.classActive);
    }

    getInfo() {
        return { text: this.text, attr: this.attr };
    }
}

export default MenuItem;
