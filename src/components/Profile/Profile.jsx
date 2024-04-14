import './Profile.css';

export default function Profile({ authorized }) {
    const language = localStorage.getItem('language');
    window.onload = () => {
        !authorized[0] && (window.location.pathname = '');
    };
    return (
        <div className="profile">
            <div className="profileContainer _container">
                <section className="profileInfo">
                    <div className="profileInfoMain">
                        <img src="./user.png" alt="" />
                        <h3>{authorized[2]}</h3>
                    </div>
                    <button>
                        {language == 'en'
                            ? 'Edit profile'
                            : 'Редактировать профиль'}
                    </button>
                    <div className="profileInfoStat">
                        <h4>{language == 'en' ? 'STATS' : 'СТАТИСТИКА'}</h4>
                        <ul>
                            <li>
                                <p>
                                    {language == 'en'
                                        ? 'Followers'
                                        : 'Подписчики'}
                                </p>
                                <p>0</p>
                            </li>
                            <li>
                                <p>
                                    {language == 'en'
                                        ? 'Plays'
                                        : 'Прослушивания'}
                                </p>
                                <p>0</p>
                            </li>
                            <li>
                                <p>{language == 'en' ? 'Tracks' : 'Треки'}</p>
                                <p>0</p>
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
                                    ? authorized[3]
                                    : authorized[3]}
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
