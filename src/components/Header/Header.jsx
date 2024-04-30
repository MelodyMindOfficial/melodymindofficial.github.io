import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { headerList, headerListUser } from '../../data/data';
import { headerList_en, headerListUser_en } from '../../data/data_en';
import logo from '/images/logo.png';
import './Header.css';

export default function Header({
    authorized,
    active,
    search,
    isActive,
    isModal,
    setSearch,
    changeLanguage,
    isMsg,
}) {
    let lastScroll = 0;
    const language = localStorage.getItem('language');
    const auth = {
        login: authorized[0],
        id: authorized[1],
        name: authorized[2],
        email: authorized[3],
        password: authorized[4],
        surname: authorized[5],
        displayName: authorized[6],
        photo: authorized[7],
        location: authorized[8],
        bio: authorized[9],
        status: authorized[10],
        subscription: authorized[11],
        followers: authorized[12],
        plays: authorized[13],
        tracks: authorized[14],
    };
    const [msg, setMsg] = useState('');
    const [showBurgerUser, setShowBurgerUser] = useState(false);
    const defaultOffset = 200;
    const scrollPosition = () =>
        window.scrollY || document.documentElement.scrollTop;
    const containHide = () =>
        document.querySelector('.headerNav').classList.contains('hide');

    document.addEventListener('click', (e) => {
        const click = e
            .composedPath()
            .includes(document.querySelector('#userButton'));

        if (!click) {
            setShowBurgerUser(false);
        }
    });

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

    function logout() {
        var url = 'https://cg30388.tw1.ru/config/logout.php';
        var headers = {
            Accept: 'application/json',
            'Conten-Type': 'application/json',
        };
        var Data = {};
        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(Data),
        })
            .then((response) => response.json())
            .then((response) => {
                setMsg(response[0].result);
                localStorage.setItem('authData', '');
                setTimeout(() => window.location.reload(), 2000);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        isMsg(msg);
        setTimeout(() => {
            setMsg('');
        }, 2000);
    }, [msg]);

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
                        {auth.id ? null : <h1>MelodyMind</h1>}
                    </Link>
                    {active != 'about' && active != 'contacts' ? (
                        <form action="" className={'headerForm ' + auth.login}>
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
                        {auth.id ? (
                            <>
                                <section
                                    className={
                                        'headerBurger ' +
                                        (showBurgerUser ? 'show' : '')
                                    }
                                >
                                    <div className="burgerUser">
                                        <Link to="/profile">
                                            <img
                                                src="/images/user.png"
                                                alt="User"
                                            />
                                        </Link>
                                        <div className="burgerUserText">
                                            <Link to="/profile">
                                                <h3>{auth.email}</h3>
                                            </Link>
                                            <Link to="/purchase">
                                                <p>
                                                    {language == 'en'
                                                        ? 'FREE'
                                                        : 'БЕСПЛАТНО'}
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                    <button className="burgerFinance">
                                        <h3>
                                            {language == 'en'
                                                ? 'Your balance'
                                                : 'Ваш баланс'}
                                        </h3>
                                        <h3>0.00 руб.</h3>
                                    </button>
                                    <hr />
                                    <ul className="burgerList">
                                        {(language == 'en'
                                            ? headerListUser_en
                                            : headerListUser
                                        ).map((item) => (
                                            <li key={item.title}>
                                                <Link to={item.link}>
                                                    <i
                                                        className={
                                                            'fa-solid ' +
                                                            item.icon
                                                        }
                                                    ></i>
                                                    <h3>{item.title}</h3>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <hr />
                                    <ul className="burgerList">
                                        <li>
                                            <Link to="/settings">
                                                <i className="fa-solid fa-sliders"></i>
                                                <h3>
                                                    {language == 'en'
                                                        ? 'Account settings'
                                                        : 'Настройки аккаунта'}
                                                </h3>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/help">
                                                <i className="fa-solid fa-life-ring"></i>
                                                <h3>
                                                    {language == 'en'
                                                        ? 'Help'
                                                        : 'Помощь'}
                                                </h3>
                                            </Link>
                                        </li>
                                    </ul>
                                    <hr />
                                    <ul className="burgerList">
                                        <li
                                            onClick={logout}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                            <h3>
                                                {language == 'en'
                                                    ? 'Log out'
                                                    : 'Выйти из аккаунта'}
                                            </h3>
                                        </li>
                                    </ul>
                                </section>
                                <button
                                    id="userButton"
                                    className="headerCart"
                                    onClick={() =>
                                        setShowBurgerUser(!showBurgerUser)
                                    }
                                >
                                    <img src="/images/user.png" alt="User" />
                                    <i className="fa-solid fa-chevron-down"></i>
                                </button>
                                <button className="headerCart">
                                    <i className="fa-solid fa-bell"></i>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </button>
                            </>
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
