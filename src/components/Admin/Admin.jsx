import { useState } from 'react';
import './Admin.css';

export default function Admin() {
    const language = localStorage.getItem('language');
    const [sectionProfile, setSectionProfile] = useState('profile');
    return (
        <div className="settingsContainer">
            <div className="_container">
                <h1 className="settingsTitle">
                    {language == 'en' ? 'Admin panel' : 'Панель администратора'}
                </h1>
                <div className="settingsSection">
                    <aside className="settingsSideSection">
                        <ul>
                            <li
                                className={
                                    sectionProfile == 'profile' ? 'active' : ''
                                }
                                onClick={() => setSectionProfile('profile')}
                            >
                                {language == 'en'
                                    ? 'Account settings'
                                    : 'Настройки аккаунтов'}
                            </li>
                        </ul>
                    </aside>
                    <div className="settingsSectionMain">
                        {sectionProfile == 'profile' && (
                            <form method="">
                                <section className="settingsImage">
                                    <div>
                                        <input
                                            type="file"
                                            name="imageAva"
                                            id="imageAva"
                                            accept="image/png, image/jpeg"
                                        />
                                        <label htmlFor="imageAva">
                                            {language == 'en'
                                                ? 'Upload image'
                                                : 'Загрузить изображение'}
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </label>
                                    </div>
                                </section>
                                <section className="settingsText">
                                    <label htmlFor="name">
                                        {language == 'en' ? 'Name' : 'Имя'}
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        pattern="([A-Za-zА-Яа-яЁё]+[\-\s]?){3,}"
                                    />
                                    <label htmlFor="surname">
                                        {language == 'en'
                                            ? 'Last name'
                                            : 'Фамилия'}
                                    </label>
                                    <input
                                        type="text"
                                        name="surname"
                                        pattern="([A-Za-zА-Яа-яЁё]+[\-\s]?){3,}"
                                    />
                                    <label htmlFor="nickname">
                                        {language == 'en'
                                            ? ''
                                            : 'Отображаемое имя'}
                                    </label>
                                    <input
                                        type="text"
                                        name="nickname"
                                        required
                                    />
                                    <label htmlFor="location">
                                        {language == 'en'
                                            ? ''
                                            : 'Местоположение'}
                                    </label>
                                    <input type="text" name="location" />
                                    <label htmlFor="bio">
                                        {language == 'en' ? '' : 'Биография'}
                                    </label>
                                    <textarea
                                        name="bio"
                                        id=""
                                        cols="30"
                                        rows="10"
                                    ></textarea>
                                    <button type="submit">
                                        {language == 'en'
                                            ? 'Save changes'
                                            : 'Сохранить изменения'}
                                    </button>
                                </section>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
