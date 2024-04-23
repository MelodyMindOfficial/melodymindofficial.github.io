import { Link } from 'react-router-dom';
import './Profile.css';

export default function Profile({ authorized, isActive }) {
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
    // console.log(authorized);
    return (
        <div className="profile">
            <div className="profileContainer _container">
                <section className="profileInfo">
                    <div className="profileInfoMain">
                        <img src="./images/user.png" alt="" />
                        <h3>
                            {auth.displayName ? auth.displayName : auth.email}
                        </h3>
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
