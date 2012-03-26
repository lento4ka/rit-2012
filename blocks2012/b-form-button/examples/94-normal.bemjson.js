({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_94-normal.css', ie: false },
        { elem: 'css', url: '_94-normal.ie.css', ie: 'IE' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_94-normal.js' }
    ],
    content: [
        {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { type: 'normal', theme: 'normal-grey', size: 'xl' },
                type: 'submit',
                content: 'Размер XL'
            }
        },
        {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { type: 'normal', theme: 'normal-grey', size: 'l' },
                type: 'button',
                content: 'Размер L'
            }
        },
        {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { type: 'normal', theme: 'normal-grey', size: 'm' },
                url: 'http://ya.ru',
                content: 'Размер M'
            }
        },
        {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { type: 'normal', theme: 'normal-grey', size: 's' },
                url: 'http://ya.ru',
                content: 'Размер S'
            }
        }
    ]
})
