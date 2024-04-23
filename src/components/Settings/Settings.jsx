import { useEffect, useState } from 'react';
import BlueButton from '../BlueButton/BlueButton';
import './Settings.css';

export default function Settings({ authorized, isMsg }) {
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
    const [name, setName] = useState(auth.name);
    const [surname, setSurname] = useState(auth.surname);
    const [displayName, setDisplayName] = useState(auth.displayName);
    const [location, setLocation] = useState(auth.location);
    const [bio, setBio] = useState(auth.bio);

    function update(e) {
        e.preventDefault();
        var url = 'https://cg30388.tw1.ru/config/update.php';
        var headers = {
            Accept: 'application/json',
            'Conten-Type': 'application/json',
        };
        var Data = {
            id: auth.id,
            name: name,
            surname: surname,
            displayName: displayName,
            location: location,
            bio: bio,
        };
        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(Data),
        })
            .then((response) => response.json())
            .then((response) => {
                setMsg(response[0].result);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        isMsg(msg);
        setTimeout(() => setMsg(''), 5000);
    }, [msg]);

    return (
        <div className="settingsContainer">
            <div className="_container">
                <h1 className="settingsTitle">
                    {language == 'en'
                        ? 'Account settings'
                        : 'Настройки аккаунта'}
                </h1>
                <div className="settingsSection">
                    <aside className="settingsSideSection">
                        <ul>
                            <li className="active">
                                {language == 'en' ? 'Profile' : 'Профиль'}
                            </li>
                            <li>
                                {language == 'en'
                                    ? 'Credentials'
                                    : 'Учетные данные'}
                            </li>
                            <li>
                                {language == 'en'
                                    ? 'Social network'
                                    : 'Социальные сети'}
                            </li>
                            <li>
                                {language == 'en' ? 'Subscription' : 'Подписка'}
                            </li>
                        </ul>
                    </aside>
                    <div className="settingsSectionMain">
                        <form method="" onSubmit={update}>
                            <section className="settingsImage">
                                <img src="./images/user.png" alt="" />
                                <BlueButton>
                                    {language == 'en'
                                        ? 'Upload image'
                                        : 'Загрузить изображение'}
                                    <i className="fa-solid fa-chevron-down"></i>
                                </BlueButton>
                            </section>
                            <section className="settingsText">
                                <label htmlFor="name">
                                    {language == 'en' ? 'Name' : 'Имя'}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    pattern="([A-Za-zА-Яа-яЁё]+[\-\s]?){3,}"
                                    value={name}
                                    onChange={() => setName()}
                                />
                                <label htmlFor="surname">
                                    {language == 'en' ? 'Last name' : 'Фамилия'}
                                </label>
                                <input
                                    type="text"
                                    name="surname"
                                    pattern="([A-Za-zА-Яа-яЁё]+[\-\s]?){3,}"
                                    value={surname}
                                    onChange={() => setSurname()}
                                />
                                <label htmlFor="nickname">
                                    {language == 'en' ? '' : 'Отображаемое имя'}
                                </label>
                                <input
                                    type="text"
                                    name="nickname"
                                    value={displayName}
                                    onChange={() => setDisplayName()}
                                />
                                <label htmlFor="location">
                                    {language == 'en' ? '' : 'Местоположение'}
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    value={location}
                                    onChange={() => setLocation()}
                                />
                                <label htmlFor="bio">
                                    {language == 'en' ? '' : 'Биография'}
                                </label>
                                <textarea
                                    name="bio"
                                    id=""
                                    cols="30"
                                    rows="10"
                                    value={bio}
                                    onChange={() => setBio()}
                                ></textarea>
                                <button type="submit">
                                    {language == 'en'
                                        ? 'Save changes'
                                        : 'Сохранить изменения'}
                                </button>
                            </section>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
