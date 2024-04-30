import { Link } from 'react-router-dom';

export default function SettingsCredit({ auth }) {
    const language = localStorage.getItem('language');

    const dataAuth = {};

    return (
        <form>
            <section className="settingsText">
                <ul className="settingsTextList">
                    <li>
                        <h3></h3>
                        <label htmlFor=""></label>
                        <Link></Link>
                    </li>
                    <li>
                        <h3></h3>
                        <label htmlFor=""></label>
                        <Link></Link>
                    </li>
                    <li>
                        <h3></h3>
                        <label htmlFor=""></label>
                        <Link></Link>
                    </li>
                    <li>
                        <h3></h3>
                        <label htmlFor=""></label>
                        <Link></Link>
                    </li>
                    <li>
                        <h3></h3>
                        <label htmlFor=""></label>
                        <Link></Link>
                    </li>
                </ul>
                <label htmlFor="name">
                    {language == 'en' ? 'Name' : 'Имя'}
                </label>
                <label htmlFor="surname">
                    {language == 'en' ? 'Last name' : 'Фамилия'}
                </label>
                <label htmlFor="nickname">
                    {language == 'en' ? '' : 'Отображаемое имя'}
                </label>
                <label htmlFor="location">
                    {language == 'en' ? '' : 'Местоположение'}
                </label>
                <label htmlFor="bio">
                    {language == 'en' ? '' : 'Биография'}
                </label>
            </section>
        </form>
    );
}
