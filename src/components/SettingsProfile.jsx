import { useState } from 'react';

export default function SettingsProfile({ updateProfile, auth }) {
    const language = localStorage.getItem('language');

    const [isname, setName] = useState(auth.name || '');
    const [issurname, setSurname] = useState(auth.surname || '');
    const [isdisplayName, setDisplayName] = useState(auth.displayName || '');
    const [islocation, setLocation] = useState(auth.location || '');
    const [isbio, setBio] = useState(auth.bio || '');

    return (
        <form method="" onSubmit={updateProfile}>
            <section className="settingsImage">
                <img src="./images/user.png" alt="" />
                <button>
                    {language == 'en'
                        ? 'Upload image'
                        : 'Загрузить изображение'}
                    <i className="fa-solid fa-chevron-down"></i>
                </button>
            </section>
            <section className="settingsText">
                <label htmlFor="name">
                    {language == 'en' ? 'Name' : 'Имя'}
                </label>
                <input
                    type="text"
                    name="name"
                    pattern="([A-Za-zА-Яа-яЁё]+[\-\s]?){3,}"
                    value={isname}
                    onChange={(event) => setName(event.target.value)}
                />
                <label htmlFor="surname">
                    {language == 'en' ? 'Last name' : 'Фамилия'}
                </label>
                <input
                    type="text"
                    name="surname"
                    pattern="([A-Za-zА-Яа-яЁё]+[\-\s]?){3,}"
                    value={issurname}
                    onChange={(event) => setSurname(event.target.value)}
                />
                <label htmlFor="nickname">
                    {language == 'en' ? '' : 'Отображаемое имя'}
                </label>
                <input
                    type="text"
                    name="nickname"
                    value={isdisplayName}
                    onChange={(event) => setDisplayName(event.target.value)}
                />
                <label htmlFor="location">
                    {language == 'en' ? '' : 'Местоположение'}
                </label>
                <input
                    type="text"
                    name="location"
                    value={islocation}
                    onChange={(event) => setLocation(event.target.value)}
                />
                <label htmlFor="bio">
                    {language == 'en' ? '' : 'Биография'}
                </label>
                <textarea
                    name="bio"
                    id=""
                    cols="30"
                    rows="10"
                    value={isbio}
                    onChange={(event) => {
                        setBio(event.target.value);
                    }}
                ></textarea>
                <button type="submit">
                    {language == 'en' ? 'Save changes' : 'Сохранить изменения'}
                </button>
            </section>
        </form>
    );
}
