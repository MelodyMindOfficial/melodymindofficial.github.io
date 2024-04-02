import { Link } from 'react-router-dom';
import { headerList } from '../../data';
import logo from '/logo.png';
import './Header.css';

export default function Header({ active, isActive }) {
    let lastScroll = 0;
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
                            <input type="text" placeholder="Что ты ищешь?" />
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
                                О нас
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
                                Контакты
                            </Link>
                        </div>
                    )}
                    <section className="headerTools">
                        {/* Если нет логина */}
                        <div className="HeaderLoginButtons">
                            <button
                                // onClick={() => (window.location = "sign-in")}
                                className="headerLoginButton"
                            >
                                Войти
                            </button>
                            <button
                                // onClick={() => (window.location = "sign-up")}
                                className="headerLoginButton"
                            >
                                Регистрация
                            </button>
                        </div>
                        <button className="headerCart">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <i className="fa-solid fa-chevron-down"></i>
                        </button>
                    </section>
                </div>
            </section>
            <nav className="headerNav" id="header">
                <ul className="headerList _container">
                    {headerList.map((item) => (
                        <li key={item.id}>
                            <Link
                                to={'/' + item.id}
                                className={active == item.id ? 'active' : null}
                                onClick={() => isActive(item.id)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
