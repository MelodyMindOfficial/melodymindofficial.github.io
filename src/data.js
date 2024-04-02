export const numTracks = 7;

export const pages = ['/MelodyMindOfficial/', '/MelodyMindOfficial/feed', '/MelodyMindOfficial/tracks', '/MelodyMindOfficial/sounds', '/MelodyMindOfficial/about', '/MelodyMindOfficial/contacts', '/MelodyMindOfficial/how-to-buy', '/MelodyMindOfficial/payment', '/MelodyMindOfficial/rules-of-sale', '/MelodyMindOfficial/privacy-policy', '/MelodyMindOfficial/buy']

export const headerList = [{
    title: 'Лента',
    id: 'feed'
}, {
    title: 'Треки',
    id: 'tracks'
}, {
    title: 'Наборы звуков',
    id: 'sounds'
}]

export const footerList = [{
        title: 'Карта сайта',
        list: [{
            label: 'Вход/Регистрация',
            id: 'sign-in'
        }, {
            label: 'Лента',
            id: 'feed'
        }, {
            label: 'Треки',
            id: 'tracks'
        }, {
            label: 'Наборы звуков',
            id: 'sounds'
        }]
    }, {
        title: 'Компания',
        list: [{
            label: 'О нас',
            id: 'about'
        }, {
            label: 'Контакты',
            id: 'contacts'

        }]
    },
    {
        title: 'Покупателям',
        list: [{
                label: 'Как покупать биты',
                id: 'how-to-buy'
            }, {
                label: 'Способы оплаты',
                id: 'payment'
            }, {
                label: 'Правила продажи',
                id: 'rules-of-sale'
            },
            {
                label: 'Политика конфиденциальности',
                id: 'privacy-policy'
            }
        ]
    }, {
        title: 'Партнерам',
        list: [{
            label: 'Продавайте на MelodyMind',
            id: 'buy'
        }]
    }
]

export const mainTrends = [{
    title: 'Название трека и это пиздец я в ахуе какой он ахуенный',
    author: 'Исполнитель',
    price: 3000,
    image: '/MelodyMindOfficial/public/track/0.png',
    id: 123456,
    idAuthor: 654321
}, {
    title: 'Название трека',
    author: 'Исполнитель',
    price: 3000,
    image: '/MelodyMindOfficial/public/track/1.png',
    id: 234561,
    idAuthor: 543216
}, {
    title: 'Название трека',
    author: 'Исполнитель',
    price: 3000,
    image: '/MelodyMindOfficial/public/track/2.png',
    id: 345612,
    idAuthor: 432165
}, {
    title: 'Название трека',
    author: 'Исполнитель',
    price: 3000,
    image: '',
    id: 561234,
    idAuthor: 321654
}, {
    title: 'Название трека',
    author: 'Исполнитель',
    price: 3000,
    image: '/MelodyMindOfficial/public/track/4.png',
    id: 612345,
    idAuthor: 216543
}, {
    title: 'Название трека',
    author: 'Исполнитель',
    price: 3000,
    image: '/MelodyMindOfficial/public/track/5.png',
    id: 162534,
    idAuthor: 615243
}, ]

export const mainTracks = [{
    title: 'Хип-хоп',
    image: '/MelodyMindOfficial/public/6.png'
}, {
    title: 'Поп',
    image: '/MelodyMindOfficial/public/7.png'
}, {
    title: 'R&B',
    image: '/MelodyMindOfficial/public/8.png'
}, {
    title: 'Рок',
    image: '/MelodyMindOfficial/public/9.png'
}, {
    title: 'Электронная',
    image: '/MelodyMindOfficial/public/10.png'
}, {
    title: 'Регги',
    image: '/MelodyMindOfficial/public/11.png'
}, ]

export const team = [{
    name: 'Никита Никишин',
    status: 'Backend-разработчик',
    image: '/MelodyMindOfficial/public/NNikishin.png'
}, {
    name: 'Валерий Краснихин',
    status: 'Документовед',
    image: '/MelodyMindOfficial/public/VKrasnihin.png'
}, {
    name: 'Степан Лапухин',
    status: 'Контент-менеджер',
    image: '/MelodyMindOfficial/public/SLapuhin.png'
}, {
    name: 'Андрей Добрынский',
    status: 'Тестировщик',
    image: '/MelodyMindOfficial/public/ADobrynskiy.png'
}, {
    name: 'Михаил Затуржинский',
    status: 'Fullstack-разработчик, Тимлид',
    image: '/MelodyMindOfficial/public/MZaturzhinskiy.png'
}, {
    name: 'Даниил Ступко',
    status: 'Аналитик',
    image: '/MelodyMindOfficial/public/DStupko.png'
}, {
    name: 'Егор Филиппов',
    status: 'Дизайнер',
    image: '/MelodyMindOfficial/public/EFilippov.png'
}, ]

export const contacts = [{
    title: 'Официальные запросы',
    text: 'Для отправки и получения деловых документов',
    linkText: 'mm.business@internet.ru',
    link: 'mailto:mm.business@internet.ru?subject=Официальный запрос'
}, {
    title: 'Цифровой арбитраж',
    text: 'Претензии по нарушению прав на интеллектуальную собственность (для Правообладателей)',
    textLink: 'Правила оформления претензий',
    linkLink: 'src/assets/docs/file.pdf',
    linkText: 'mm.business@internet.ru',
    link: 'mailto:mm.business@internet.ru?subject=Цифровой арбитраж'
}, {
    title: 'Партнерам',
    text: 'Узнайте подробные условия для сотрудничества',
    linkText: 'Подробнее',
    link: '/'
}, {
    title: 'Говори свободно',
    text: 'Сообщите нам о случаях мошенничества и коррупции на горячую линию',
    linkText: 'Подробнее',
    link: '/'
}, {
    title: 'Юридический адрес',
    text: '142181, Московская область, г. Подольск, деревня Коледино, Территория Индустриальный парк Коледино, д. 6, стр. 1',
}]