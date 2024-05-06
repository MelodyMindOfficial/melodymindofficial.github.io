export const numTracks = 13;

export const pages = ['', 'login', 'sign-in', 'sign-up', 'reset-password', 'feed', 'images/tracks', 'sounds', 'about', 'contacts', 'how-to-buy', 'payment', 'rules-of-sale', 'privacy-policy', 'buy', 'profile', 'settings']

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

export const headerListUser = [{
    title: 'Мой плейлист',
    icon: 'fa-music',
    link: '/my-playlist'
}, {
    title: 'Избранное',
    icon: 'fa-heart',
    link: '/favorite'
}, {
    title: 'История',
    icon: 'fa-clock-rotate-left',
    link: '/history'
}, {
    title: 'Покупки',
    icon: 'fa-bag-shopping',
    link: '/purchace'
}, ]

export const footerList = [{
        title: 'MelodyMind',
        id: 'map-site',
        list: [{
            label: 'Вход/Регистрация',
            id: 'login',
            target: '_blank',
            bool: true
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
        id: 'company',
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
        id: 'for-sellers',
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
                id: 'src/assets/docs/Политика конфиденциальности.pdf',
                download: true
            }
        ]
    }, {
        title: 'Партнерам',
        id: 'for-partners',
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
    image: '/images/track/0.png',
    id: 123456,
    idAuthor: 654321
}, {
    title: 'Название трека и это пиздец я в ахуе какой он ахуенный',
    author: 'Исполнитель',
    price: 3000,
    image: '/images/track/1.png',
    id: 123456,
    idAuthor: 654321
}, {
    title: 'Название трека и это пиздец я в ахуе какой он ахуенный',
    author: 'Исполнитель',
    price: 3000,
    image: '/images/track/2.png',
    id: 123456,
    idAuthor: 654321
}, {
    title: 'Название трека и это пиздец я в ахуе какой он ахуенный',
    author: 'Исполнитель',
    price: 3000,
    image: '/images/track/3.png',
    id: 123456,
    idAuthor: 654321
}, {
    title: 'Название трека и это пиздец я в ахуе какой он ахуенный',
    author: 'Исполнитель',
    price: 3000,
    image: '/images/track/4.png',
    id: 123456,
    idAuthor: 654321
}, {
    title: 'Название трека и это пиздец я в ахуе какой он ахуенный',
    author: 'Исполнитель',
    price: 3000,
    image: '/images/track/5.png',
    id: 123456,
    idAuthor: 654321
}, {
    title: 'Название трека и это пиздец я в ахуе какой он ахуенный',
    author: 'Исполнитель',
    price: 3000,
    image: '/images/track/6.png',
    id: 123456,
    idAuthor: 654321
}, {
    title: 'Название трека',
    author: 'Исполнитель',
    price: 3000,
    image: '/images/track/7.png',
    id: 234561,
    idAuthor: 543216
}, {
    title: 'Название трека',
    author: 'Исполнитель',
    price: 3000,
    image: '/images/track/8.png',
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
    image: '/images/track/10.png',
    id: 612345,
    idAuthor: 216543
}, {
    title: 'Название трека',
    author: 'Исполнитель',
    price: 3000,
    image: '/images/track/11.png',
    id: 162534,
    idAuthor: 615243
}, ]

export const mainTracks = [{
    title: 'Хип-хоп',
    image: '/images/6.png'
}, {
    title: 'Поп',
    image: '/images/7.png'
}, {
    title: 'R&B',
    image: '/images/8.png'
}, {
    title: 'Рок',
    image: '/images/9.png'
}, {
    title: 'Электронная',
    image: '/images/10.png'
}, {
    title: 'Регги',
    image: '/images/11.png'
}, ]

export const team = [{
    name: 'Никита Никишин',
    status: 'Backend-разработчик',
    image: '/images/team/NNikishin.png'
}, {
    name: 'Валерий Краснихин',
    status: 'Документовед',
    image: '/images/team/VKrasnihin.png'
}, {
    name: 'Степан Лапухин',
    status: 'Контент-менеджер',
    image: '/images/team/SLapuhin.png'
}, {
    name: 'Андрей Добрынский',
    status: 'Тестировщик',
    image: '/images/team/ADobrynskiy.png'
}, {
    name: 'Михаил Затуржинский',
    status: 'Fullstack-разработчик, Тимлид',
    image: '/images/team/MZaturzhinskiy.png'
}, {
    name: 'Даниил Ступко',
    status: 'Аналитик',
    image: '/images/team/DStupko.png'
}, {
    name: 'Егор Филиппов',
    status: 'Дизайнер',
    image: '/images/team/EFilippov.png'
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