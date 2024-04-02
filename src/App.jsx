import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { pages } from './data';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Feed from './components/Feed';
import Tracks from './components/Tracks';
import Sounds from './components/Sounds';
import About from './components/About/About';
import Contacts from './components/About/Contacts';

export default function App() {
    localStorage.setItem('active', window.location.pathname.slice(1));

    const [active, setActive] = useState(
        localStorage.getItem('active') || 'main'
    );

    useEffect(() => {
        localStorage.setItem('active', active);
        <Header active={active} />;
    }, [active]);

    function activeSection(current) {
        setActive(current),
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
    }

    return (
        <>
            <BrowserRouter>
                <Header
                    active={active}
                    isActive={(current) => activeSection(current)}
                />
                <main style={{ marginTop: '115px' }}>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/feed" element={<Feed />} />
                        <Route path="/tracks" element={<Tracks />} />
                        <Route path="/sounds" element={<Sounds />} />
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
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                {pages.includes(window.location.pathname.slice(20)) ? (
                    <Footer isActive={(current) => activeSection(current)} />
                ) : null}
            </BrowserRouter>
        </>
    );
}
