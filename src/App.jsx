import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { pages } from './data';
import NotFound from './components/NotFound/NotFound';
import SignIn from './components/Authorization/SignIn';
import SignUp from './components/Authorization/SignUp';
import ResetPassword from './components/Authorization/ResetPassword';
import Authorization from './components/Authorization/Authorization';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Feed from './components/Feed';
import Tracks from './components/Tracks';
import Sounds from './components/Sounds';
import About from './components/About/About';
import Contacts from './components/About/Contacts';
import PrivacyPolicy from './components/PrivacyPolicy';
import Notify from './components/Notify/Notify';
import './index.css';

export default function App() {
    localStorage.setItem('active', window.location.pathname.slice(1));
    const message = localStorage.getItem('message');

    const [active, setActive] = useState(
        localStorage.getItem('active') || 'main'
    );
    const [email, setEmail] = useState(localStorage.getItem('email') || '');
    const [modal, setModal] = useState(false);
    const [search, setSeacrh] = useState('');
    const [notify, setNotify] = useState('');
    const activePage =
        window.location.pathname.slice(1) != 'sign-in' &&
        window.location.pathname.slice(1) != 'sign-up' &&
        window.location.pathname.slice(1) != 'reset-password' &&
        window.location.pathname.slice(1) != 'login';

    addEventListener('popstate', () => {
        setActive(window.location.pathname.slice(1));
    });

    useEffect(() => {
        localStorage.setItem('active', active);
        <Header active={active} />;
    }, [active]);

    useEffect(() => {
        setNotify(message);
    }, [message]);

    useEffect(() => {
        localStorage.setItem('email', email);
    }, [email]);

    useEffect(() => {
        localStorage.setItem('email', email);
    }, [email]);

    function activeSection(current) {
        setActive(current);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    function changeLanguage() {
        const lan = localStorage.getItem('language');
        if (lan == 'en') {
            localStorage.setItem('language', 'ru');
        } else {
            localStorage.setItem('language', 'en');
        }

        return location.reload();
    }

    window.onload = () => {
        document.getElementById('preloader').classList.remove('show');
    };

    return (
        <>
            <div id="preloader" className="">
                <div className="spinner"></div>
            </div>
            <Authorization
                open={modal}
                isModal={(current) => setModal(current)}
                target={'_blank'}
                isEmail={(current) => setEmail(current)}
            />
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
                    />
                )}
                <main style={{ marginTop: '115px' }}>
                    <Routes>
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
                            element={<SignIn email={email} />}
                        />
                        <Route
                            path="/sign-up"
                            element={<SignUp email={email} />}
                        />
                        <Route
                            path="/reset-password"
                            element={<ResetPassword email={email} />}
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
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                {pages.includes(window.location.pathname.slice(1)) &&
                activePage ? (
                    <Footer isActive={(current) => activeSection(current)} />
                ) : null}
            </BrowserRouter>
        </>
    );
}
