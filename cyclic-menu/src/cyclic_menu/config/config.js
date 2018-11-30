const config = {
    controls: {
        // Keyboard event.keyCode
        nextItem: [39],
        previousItem: [37],
        action: [13, 32],
    },
    menuId: 'custom-menu',
    classNames: {
        menuContainer: 'custom-menu-wrapper',
        menuItem: 'custom-menu-link',
        menuItemActive: 'custom-menu-link__active',
    },
    keyboardDelayTime: 150,
};

export default config;
