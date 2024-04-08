import { useEffect, useState } from 'react';
import { mainTrends, mainTracks, numTracks } from '../../data';
import MainSection from '../MainSection/MainSection';
import emailjs from '@emailjs/browser';
import './Main.css';

export default function Main({ search, setSearch, isNotify }) {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const [button, setButton] = useState(true);

    const sendEmail = (e) => {
        e.preventDefault();

        setButton(false);

        emailjs
            .sendForm('mail', 'template_isk5d14', e.target, {
                publicKey: 'WmNrBY16kNyn5fA6M',
            })
            .then(
                () => {
                    setButton(true);
                    document.querySelector('.mainEmailForm').reset();
                    document.querySelector('#email').blur();
                    isNotify(
                        'Мы только что отправили вам электронное письмо с инструкциями по выполнению этого запроса'
                    );
                    setInvalid(true);
                },
                (error) => {
                    setButton(true);
                    isNotify(
                        'Не удалось отправить письмо! Попробуйте обновить старинцу!'
                    );
                    console.log('FAILED...', error.text);
                }
            );
    };

    var previous = getRandomInt(numTracks);
    var current = getRandomInt(numTracks);

    var i = 0;
    const [invalid, setInvalid] = useState(true);
    const [image, setImage] = useState('/track/' + previous + '.png');

    function handleEmailChange(event) {
        if (event.target.value.trim().length != 0) setInvalid(false);
        else setInvalid(true);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            document.querySelector('.introImage').classList.add('invisible');
            current = getRandomInt(numTracks);
            while (current == previous) {
                current = getRandomInt(numTracks);
            }
            previous = current;
            setImage('/track/' + current + '.png');
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    return (
        <>
            <div className="introSection">
                <div className="introContent _container">
                    <h2 className="introTitle">
                        Live by the <span style={{ color: 'red' }}>beat</span>
                        <br /> of your
                        <span style={{ color: 'red' }}>heart</span>
                    </h2>
                    <form action="" className="introForm">
                        <button className="leftSubmit" type="submit">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <input
                            type="text"
                            placeholder="Исследуйте новые звуки - ищите ритмы и продюсеров"
                            className="mainInput"
                            value={search}
                            onChange={(e) => handleSearch(e)}
                        />
                        <button className="rigthSubmit" type="submit">
                            Поиск
                        </button>
                    </form>
                </div>
                <div className="introImage">
                    <div className="introImageGradient"></div>
                    <img src={image} alt="Intro" />
                </div>
            </div>
            <MainSection>{mainTrends}</MainSection>
            <div className="mainTrust">
                <h3>Мы доверяем:</h3>
                <div className="trustSection">
                    {[...Array(2)].map(() => (
                        <div key={i++} className="imageTrust">
                            <img src="/slider_0.png" alt="" />
                            <img src="/slider_1.png" alt="" />
                            <img src="/slider_2.png" alt="" />
                            <img src="/slider_3.png" alt="" />
                            <img src="/slider_4.png" alt="" />
                            <img src="/slider_5.png" alt="" />
                            <img src="/slider_6.png" alt="" />
                        </div>
                    ))}
                </div>
            </div>
            <MainSection>{mainTracks}</MainSection>
            <div className="mainEmail">
                <h3 style={{ fontSize: '18px', fontWeight: '700' }}>
                    Присылайте нам персональные советы по покупкам и продажам на
                    MelodyMind
                </h3>
                <form onSubmit={sendEmail} className="mainEmailForm">
                    <i className="fa-solid fa-envelope"></i>
                    <input
                        id="email"
                        name="email"
                        onChange={handleEmailChange}
                        type="email"
                        placeholder="Введите свою почту"
                        required
                    />
                    <button
                        disabled={invalid}
                        className={!invalid ? 'active' : null}
                        type="submit"
                    >
                        {button ? (
                            'Подписаться'
                        ) : (
                            <div className="spinner"></div>
                        )}
                    </button>
                </form>
            </div>
        </>
    );
}
