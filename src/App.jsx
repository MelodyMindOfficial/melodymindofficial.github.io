import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { pages } from './data/data';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Notify from './components/Notify/Notify';

// Header Pages
import Main from './components/Main/Main';
import Feed from './components/Feed';
import Tracks from './components/Tracks';
import Sounds from './components/Sounds';

// Footer Pages
import About from './components/About/About';
import Contacts from './components/About/Contacts';

// Other Pages
import Admin from './components/Admin/Admin';
import PrivacyPolicy from './components/PrivacyPolicy';
import NotFound from './components/NotFound/NotFound';

// Authorizationn
import Authorization from './components/Authorization/Authorization';
import SignIn from './components/Authorization/SignIn';
import SignUp from './components/Authorization/SignUp';
import ResetPassword from './components/Authorization/ResetPassword';
import ResetEmail from './components/Authorization/ResetEmail';
import Confirm from './components/Authorization/Confirm';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

// Style
import './index.css';

export default function App() {
    // Получаем данные, если пользователь авторизован
    useEffect(() => {
        var url = 'https://cg30388.tw1.ru/config/config.php';
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
                setAuthorized(response[0]);
                localStorage.setItem('authData', JSON.stringify(response[0]));
            })
            .catch((err) => console.log(err));
        setTimeout(() => {
            document.getElementById('preloader').classList.remove('show');
        }, 500); // Убираем Preloader
    }, [window]);

    // --- НАЧАЛЬНЫЕ ЗНАЧЕНИЯ --- //
    localStorage.setItem('active', window.location.pathname.slice(1)); // Присваиваем значение для активной страницы
    const message = localStorage.getItem('message'); // Получаем значение для уведомления

    // useState
    const [email, setEmail] = useState(localStorage.getItem('email') || ''); // Получаем значение email из Входа
    const [modal, setModal] = useState(false); // Устанавливаем значение для модального окна
    const [search, setSeacrh] = useState(''); // Устанавливаем значение для поиска
    const [notify, setNotify] = useState(''); // Устанавливаем значение для уведомленя
    const [authorized, setAuthorized] = useState([]); // Инициализируем массив для аккаунта
    const [active, setActive] = useState(
        localStorage.getItem('active') || 'main'
    ); // Устанавливаем значение активной страницы для Router
    const activePage =
        window.location.pathname.slice(1) != 'sign-in' &&
        window.location.pathname.slice(1) != 'sign-up' &&
        window.location.pathname.slice(1) != 'reset-password' &&
        window.location.pathname.slice(1) != 'reset-email' &&
        window.location.pathname.slice(1) != 'confirm' &&
        window.location.pathname.slice(1) != 'login'; // Проверяем значение активной страницы

    // --- ОСНОВНЫЕ ФУНКЦИИ --- //
    addEventListener('popstate', () => {
        setActive(window.location.pathname.slice(1));
    }); // Проверка нажатии клавиши "Назад"

    useEffect(() => {
        localStorage.setItem('active', active);
        <Header active={active} />;
    }, [active]); // Запоминаем активную страницу

    useEffect(() => {
        setNotify(message);
    }, [message]); // Устанавливаем уведомление

    useEffect(() => {
        localStorage.setItem('email', email);
    }, [email]); // Запоминаем введенную почту

    // Устанавливаем активную страницу
    function activeSection(current) {
        setActive(current);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    // Устанавливаем и запоминаем язык страницы
    function changeLanguage() {
        const lan = localStorage.getItem('language');
        if (lan == 'en') {
            localStorage.setItem('language', 'ru');
        } else {
            localStorage.setItem('language', 'en');
        }

        return location.reload();
    }

    return (
        <>
            {/* Preloader */}
            <div id="preloader" className="show">
                <div className="spinner"></div>
            </div>

            {/* Авторизация */}
            <Authorization
                open={modal}
                isModal={(current) => setModal(current)}
                // target={'_blank'}
                isEmail={(current) => setEmail(current)}
            />

            {/* Уведомление */}
            {notify && <Notify setShow={() => setNotify('')}>{notify}</Notify>}

            <BrowserRouter>
                {activePage && (
                    <Header
                        active={active}
                        isActive={(current) => activeSection(current)}
                        isModal={(current) => setModal(current)}
                        search={search}
                        setSearch={(current) => setSeacrh(current)}
                        changeLanguage={() => changeLanguage()}
                        isMsg={(current) => setNotify(current)}
                    />
                )}
                <main style={{ marginTop: '115px' }}>
                    <Routes>
                        {authorized.status && (
                            <Route path="/admin" element={<Admin />} />
                        )}
                        <Route
                            path="/"
                            element={
                                <Main
                                    search={search}
                                    setSearch={(current) => setSeacrh(current)}
                                    isNotify={(current) => setNotify(current)}
                                />
                            }
                        />
                        <Route
                            path="/sign-in"
                            element={
                                <SignIn
                                    email={email}
                                    isMsg={(current) => setNotify(current)}
                                />
                            }
                        />
                        <Route
                            path="/sign-up"
                            element={
                                <SignUp
                                    email={email}
                                    isMsg={(current) => setNotify(current)}
                                />
                            }
                        />
                        <Route
                            path="/reset-password"
                            element={
                                <ResetPassword
                                    email={email}
                                    isMsg={(current) => setNotify(current)}
                                />
                            }
                        />
                        <Route
                            path="/reset-email"
                            element={
                                <ResetEmail
                                    email={email}
                                    isMsg={(current) => setNotify(current)}
                                />
                            }
                        />
                        <Route path="/feed" element={<Feed />} />
                        <Route path="/tracks" element={<Tracks />} />
                        <Route path="/sounds" element={<Sounds />} />
                        <Route
                            path="/privacy-policy"
                            element={<PrivacyPolicy />}
                        />
                        <Route
                            path="/about"
                            element={
                                <About
                                    isActive={(current) =>
                                        activeSection(current)
                                    }
                                />
                            }
                        />
                        <Route
                            path="/contacts"
                            element={
                                <Contacts
                                    isActive={(current) =>
                                        activeSection(current)
                                    }
                                />
                            }
                        />
                        <Route
                            path="login"
                            element={
                                <Authorization
                                    open={true}
                                    isEmail={(current) => setEmail(current)}
                                />
                            }
                        />
                        <Route
                            path="/profile"
                            element={
                                <Profile
                                    authorized={authorized}
                                    isActive={(current) =>
                                        activeSection(current)
                                    }
                                />
                            }
                        />
                        <Route
                            path="/settings"
                            element={
                                <Settings
                                    // authorized={authorized}
                                    isMsg={(current) => setNotify(current)}
                                />
                            }
                        />
                        <Route path="/confirm" element={<Confirm />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                {pages.includes(window.location.pathname.slice(1)) && //проверка для отображения Footer'a
                activePage ? (
                    <Footer isActive={(current) => activeSection(current)} />
                ) : null}
            </BrowserRouter>
        </>
    );
}
