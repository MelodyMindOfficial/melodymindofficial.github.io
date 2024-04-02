import { useEffect, useState } from 'react';
import { mainTrends, mainTracks, numTracks } from '../../data';
import MainSection from '../MainSection/MainSection';
import './Main.css';

export default function Main() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    var previous = getRandomInt(numTracks);
    var current = getRandomInt(numTracks);

    var i = 0;
    const [invalid, setInvalid] = useState(true);
    const [image, setImage] = useState(
        '/MelodyMindOfficial/public/track/' + previous + '.png'
    );

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
            setImage('/MelodyMindOfficial/public/track/' + current + '.png');
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <>
            <div className="introSection">
                <div className="introContent _container">
                    <h2 className="introTitle">Lorem ipsum dolor sit amet</h2>
                    <form action="" className="introForm">
                        <button type="submit">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <input
                            type="text"
                            placeholder="Исследуйте новые звуки - ищите ритмы и продюсеров"
                        />
                        <button type="submit">Поиск</button>
                    </form>
                </div>
                <div className="introImage">
                    <div className="introImageGradient"></div>
                    <img
                        // style={{ animation: 'show 5s infinite' }}
                        src={image}
                        alt="Intro"
                    />
                </div>
            </div>
            <MainSection>{mainTrends}</MainSection>
            <div className="mainTrust">
                <h3 style={{ fontSize: '24px' }}>Мы доверяем:</h3>
                <div className="trustSection">
                    {[...Array(2)].map(() => (
                        <div key={i++} className="imageTrust">
                            <img
                                src="/MelodyMindOfficial/public/slider_0.png"
                                alt=""
                            />
                            <img
                                src="/MelodyMindOfficial/public/slider_1.png"
                                alt=""
                            />
                            <img
                                src="/MelodyMindOfficial/public/slider_2.png"
                                alt=""
                            />
                            <img
                                src="/MelodyMindOfficial/public/slider_3.png"
                                alt=""
                            />
                            <img
                                src="/MelodyMindOfficial/public/slider_4.png"
                                alt=""
                            />
                            <img
                                src="/MelodyMindOfficial/public/slider_5.png"
                                alt=""
                            />
                            <img
                                src="/MelodyMindOfficial/public/slider_6.png"
                                alt=""
                            />
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
                <form action="" className="mainEmailForm">
                    <i className="fa-solid fa-envelope"></i>
                    <input
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
                        Подписаться
                    </button>
                </form>
            </div>
        </>
    );
}
