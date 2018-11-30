/*
Menu item  config example
scheme of menuItemObject {
    text: 'Menu item inner text',
    // valid HTML attributes
    attributes: {
        target: '_blank',
        href: 'www.google.com',
        "data-id": "1909120",
    },
}
*/

const menuItemsList = [
    {
        text: '0. Markup1',
        attributes: {
            target: '_blank',
            href: 'https://github.com/rolling-scopes-school/RS-Short-Track/wiki/0.-Markup1',
        },
    },
    {
        text: '1. ReadMe',
        attributes: {
            target: '_blank',
            href: 'https://github.com/rolling-scopes-school/RS-Short-Track/wiki/1.-Readme',
        },
    },
    {
        text: '2. Javascript Classes & Inheritance',
        attributes: {
            target: '_blank',
            href: 'https://github.com/rolling-scopes-school/RS-Short-Track/wiki/2.-Javascript-Classes-&-Inheritance',
        },
    },
    {
        text: '3. Custom lodash',
        attributes: {
            target: '_blank',
            href: 'https://github.com/rolling-scopes-school/RS-Short-Track/wiki/3.-Custom-Lodash',
        },
    },
    {
        text: '4. Cyclic menu',
        attributes: {
            target: '_blank',
            href: 'https://github.com/rolling-scopes-school/RS-Short-Track/wiki/4.-Cyclic-menu',
        },
    },
];

export default menuItemsList;
