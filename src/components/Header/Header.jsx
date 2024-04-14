import { Link } from 'react-router-dom';
import { headerList } from '../../data';
import { headerList_en } from '../../data_en';
import logo from '/logo.png';
import './Header.css';

export default function Header({
    authorized,
    active,
    search,
    isActive,
    isModal,
    setSearch,
    changeLanguage,
}) {
    let lastScroll = 0;
    const language = localStorage.getItem('language');
    const defaultOffset = 200;
    const scrollPosition = () =>
        window.scrollY || document.documentElement.scrollTop;
    const containHide = () =>
        document.querySelector('.headerNav').classList.contains('hide');

    window.addEventListener('scroll', () => {
        if (
            scrollPosition() > lastScroll &&
            !containHide() &&
            scrollPosition() > defaultOffset
        ) {
            //scroll down
            document.querySelector('.headerNav').classList.add('hide');
        } else if (scrollPosition() < lastScroll && containHide()) {
            //scroll up
            document.querySelector('.headerNav').classList.remove('hide');
        }

        lastScroll = scrollPosition();
    });

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    return (
        <header>
            <section className="headerSection">
                <div className="headerContainer _container">
                    <Link
                        className="headerLogo"
                        to="/"
                        onClick={() => isActive('main')}
                    >
                        <img src={logo} alt="Logo" />
                        <h1>MelodyMind</h1>
                    </Link>
                    {active != 'about' && active != 'contacts' ? (
                        <form action="" className="headerForm">
                            <button type="submit">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                            <input
                                className="headerInput"
                                type="text"
                                placeholder={
                                    language == 'en'
                                        ? 'What are you looking for?'
                                        : 'Что ты ищешь?'
                                }
                                value={search}
                                onChange={(e) => handleSearch(e)}
                            />
                        </form>
                    ) : (
                        <div>
                            <Link
                                to="/about"
                                className={
                                    active == 'about'
                                        ? 'headerSwitchLink active'
                                        : 'headerSwitchLink'
                                }
                                onClick={() => isActive('about')}
                            >
                                {language == 'en' ? 'About us' : 'О нас'}
                            </Link>
                            <Link
                                to="/contacts"
                                className={
                                    active == 'contacts'
                                        ? 'headerSwitchLink active'
                                        : 'headerSwitchLink'
                                }
                                onClick={() => isActive('contacts')}
                            >
                                {language == 'en' ? 'Contacts' : 'Контакты'}
                            </Link>
                        </div>
                    )}
                    <section className="headerTools">
                        {authorized[0] ? (
                            <button>Выйти</button>
                        ) : (
                            <div className="HeaderLoginButtons">
                                <button
                                    onClick={() => isModal(true)}
                                    className="headerLoginButton"
                                >
                                    {language == 'en' ? 'Sign in' : 'Вход'}
                                </button>
                                <button
                                    onClick={() => isModal(true)}
                                    className="headerLoginButton"
                                >
                                    {language == 'en'
                                        ? 'Sign up'
                                        : 'Регистрация'}
                                </button>
                            </div>
                        )}
                        <button className="headerCart">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <i className="fa-solid fa-chevron-down"></i>
                        </button>
                        <button
                            className="headerCart"
                            onClick={() => changeLanguage()}
                        >
                            {language == 'en' ? <i>Ru</i> : <i>En</i>}
                        </button>
                    </section>
                </div>
            </section>
            <nav className="headerNav" id="header">
                <ul className="headerList _container">
                    {(language == 'en' ? headerList_en : headerList).map(
                        (item) => (
                            <li key={item.id}>
                                <Link
                                    to={'/' + item.id}
                                    className={
                                        active == item.id ? 'active' : null
                                    }
                                    onClick={() => isActive(item.id)}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </nav>
        </header>
    );
}
