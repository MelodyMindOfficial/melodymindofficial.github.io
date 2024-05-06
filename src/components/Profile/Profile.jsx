import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

export default function Profile({ authorized, isActive }) {
    const language = localStorage.getItem('language');

    try {
        var authorized = JSON.parse(localStorage.getItem('authData'));
    } catch (error) {
        setTimeout(() => {
            window.location.pathname = '/login';
        }, 500);
    }

    // var authorized = [
    //     true,
    //     999999,
    //     'John',
    //     'john1989@gmail.com',
    //     '123John!!!',
    //     'Smith',
    //     'John_Smith',
    //     null,
    //     'the UK',
    //     'I was born in London and I wanna tell you that I can speak only russian language, so Ima switching it. Всем привет, меня зовут Джон и я родился в Англии. Однако я хорошо знаю русский за счет того, что моя бабушка русская, и была против того, чтобы я говорил по англиски',
    //     0,
    //     false,
    //     0,
    //     0,
    //     0,
    //     79782156190,
    //     false,
    //     'johanSoundCloud',
    //     'johanYoutube',
    //     'johanRutube',
    //     '@johanTik-Tok',
    //     'johanTwitch',
    // ];

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
        phoneNumber: authorized[15],
        Auth2: authorized[16],
        soundCloud: authorized[17],
        youtube: authorized[18],
        rutube: authorized[19],
        tiktok: authorized[20],
        twitch: authorized[21],
    };

    return (
        <div className="profile">
            <div className="profileContainer _container">
                <section className="profileInfo">
                    <div className="profileInfoMain">
                        <img src="./images/user.png" alt="" />
                        <h3>
                            {auth.displayName ? auth.displayName : auth.email}
                        </h3>
                        {auth.location && <p>{auth.location}</p>}
                    </div>
                    <Link to="/settings" onClick={() => isActive('main')}>
                        <button>
                            {language == 'en'
                                ? 'Edit profile'
                                : 'Редактировать профиль'}
                        </button>
                    </Link>
                    <div className="profileInfoStat">
                        <h4>{language == 'en' ? 'STATS' : 'СТАТИСТИКА'}</h4>
                        <ul>
                            <li>
                                <p>
                                    {language == 'en'
                                        ? 'Followers'
                                        : 'Подписчики'}
                                </p>
                                <p>{auth.followers}</p>
                            </li>
                            <li>
                                <p>
                                    {language == 'en'
                                        ? 'Plays'
                                        : 'Прослушивания'}
                                </p>
                                <p>{auth.plays}</p>
                            </li>
                            <li>
                                <p>{language == 'en' ? 'Tracks' : 'Треки'}</p>
                                <p>{auth.tracks}</p>
                            </li>
                        </ul>
                    </div>
                    {auth.tracks != 0 ? (
                        <>
                            <hr style={{ height: '2px' }} />
                            <div className="profileInfoStat">
                                <h4>{language == 'en' ? 'TRACKS' : 'ТРЕКИ'}</h4>
                                <ul>
                                    <li>
                                        <p>{auth.tracks}</p>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : null}
                    {auth.bio ? (
                        <>
                            <hr style={{ height: '2px' }} />
                            <div className="profileInfoStat">
                                <h4>
                                    {language == 'en' ? 'ABOUT ME' : 'О СЕБЕ'}
                                </h4>
                                <ul>
                                    <li>
                                        <p>{auth.bio}</p>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : null}
                    {auth.soundCloud ||
                    auth.youtube ||
                    auth.rutube ||
                    auth.tiktok ||
                    auth.twitch ? (
                        <>
                            <hr style={{ height: '2px' }} />
                            <div className="profileInfoStat" id="social">
                                <h4>
                                    {language == 'en'
                                        ? 'FIND ME ON'
                                        : 'НАЙТИ МЕНЯ НА'}
                                </h4>
                                <ul>
                                    {auth.soundCloud && (
                                        <li>
                                            <a
                                                href={
                                                    'https://soundcloud.com/' +
                                                    auth.soundCloud
                                                }
                                                target="_blank"
                                            >
                                                <p>
                                                    <i className="fa-brands fa-soundcloud"></i>{' '}
                                                    Sound Cloud
                                                </p>
                                            </a>
                                        </li>
                                    )}
                                    {auth.youtube && (
                                        <li>
                                            <a
                                                href={
                                                    'https://youtube.com/' +
                                                    auth.youtube
                                                }
                                                target="_blank"
                                            >
                                                <p>
                                                    <i className="fa-brands fa-youtube"></i>{' '}
                                                    Youtube
                                                </p>
                                            </a>
                                        </li>
                                    )}
                                    {auth.rutube && (
                                        <li>
                                            <a
                                                href={
                                                    'https://rutube.ru/channel/' +
                                                    auth.rutube
                                                }
                                                target="_blank"
                                            >
                                                <p>
                                                    <i className="fa-brands fa-rust"></i>{' '}
                                                    Rutube
                                                </p>
                                            </a>
                                        </li>
                                    )}
                                    {auth.tiktok && (
                                        <li>
                                            <a
                                                href={
                                                    'https://tiktok.com/' +
                                                    auth.tiktok
                                                }
                                                target="_blank"
                                            >
                                                <p>
                                                    <i className="fa-brands fa-tiktok"></i>{' '}
                                                    Tik-Tok
                                                </p>
                                            </a>
                                        </li>
                                    )}
                                    {auth.twitch && (
                                        <li>
                                            <a
                                                href={
                                                    'https://twitch.tv/' +
                                                    auth.twitch
                                                }
                                                target="_blank"
                                            >
                                                <p>
                                                    <i className="fa-brands fa-twitch"></i>{' '}
                                                    Twitch
                                                </p>
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </>
                    ) : null}
                </section>
                <section className="profileTracks">
                    {false ? (
                        <div></div>
                    ) : (
                        <div className="profileTracksNon">
                            <h2>
                                {language == 'en'
                                    ? 'There is no content available'
                                    : 'Нет доступного контента'}
                            </h2>
                            <p>
                                {language == 'en'
                                    ? 'There is not yet enough content'
                                    : 'Контента пока не достаточно'}
                            </p>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}
