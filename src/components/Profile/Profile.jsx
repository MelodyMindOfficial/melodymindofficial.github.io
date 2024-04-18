import './Profile.css';

export default function Profile({ authorized }) {
    const language = localStorage.getItem('language');
    const auth = {
        login: authorized[0],
        id: authorized[1],
        name: authorized[2],
        email: authorized[3],
        password: authorized[4],
    };
    console.log(authorized);
    return (
        <div className="profile">
            <div className="profileContainer _container">
                <section className="profileInfo">
                    <div className="profileInfoMain">
                        <img src="./images/user.png" alt="" />
                        <h3>{auth.email}</h3>
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
