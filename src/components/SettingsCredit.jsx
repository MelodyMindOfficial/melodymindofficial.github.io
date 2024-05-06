import { Link } from 'react-router-dom';

export default function SettingsCredit({ auth, isMsg }) {
    const language = localStorage.getItem('language');

    const dataAuth = auth;

    function copyTextToClipboard() {
        navigator.clipboard.writeText(dataAuth.id);
        isMsg(language == 'en' ? 'ID has been copied' : 'ID скопирован');
    }

    return (
        <form>
            <section className="settingsText">
                <ul className="settingsTextList">
                    <li>
                        <h3>{language == 'en' ? 'Email' : 'Эл. почта'}</h3>
                        <section>
                            <label htmlFor="">{dataAuth.email}</label>
                            <Link target="_blank" to="/reset-email">
                                {language == 'en'
                                    ? 'Change email'
                                    : 'Изменить электронную почту'}
                            </Link>
                        </section>
                    </li>
                    <li>
                        <h3>ID</h3>
                        <section>
                            <label htmlFor="">{dataAuth.id}</label>
                            <a onClick={() => copyTextToClipboard()}>
                                {language == 'en'
                                    ? 'Copy ID'
                                    : 'Скопировать ID'}
                            </a>
                        </section>
                    </li>
                    <li>
                        <h3>{language == 'en' ? 'Password' : 'Пароль'}</h3>
                        <section>
                            <label htmlFor="">********</label>
                            <Link target="_blank" to="/reset-password">
                                {language == 'en'
                                    ? 'Change password'
                                    : 'Изменить пароль'}
                            </Link>
                        </section>
                    </li>
                    <li>
                        <h3>
                            {language == 'en'
                                ? 'Phone number'
                                : 'Номер телефона'}
                        </h3>
                        <section>
                            <label htmlFor="">
                                {dataAuth.phoneNumber &&
                                    '+' + dataAuth.phoneNumber}
                            </label>
                            <Link>
                                {language == 'en'
                                    ? 'Change phone number'
                                    : 'Изменить номер телефона'}
                            </Link>
                        </section>
                    </li>
                    <li>
                        <h3>
                            {language == 'en'
                                ? '2-Auth'
                                : 'Двухфакторная аутентификация'}
                        </h3>
                        <section>
                            <label htmlFor="">
                                {dataAuth.Auth2
                                    ? language == 'en'
                                        ? 'Connected'
                                        : 'Подключена'
                                    : language == 'en'
                                    ? 'Not connected'
                                    : 'Не подключена'}
                            </label>
                            <Link>
                                {language == 'en'
                                    ? 'Change the security method'
                                    : 'Изменить метод обеспечения безопасности'}
                            </Link>
                        </section>
                    </li>
                </ul>
            </section>
        </form>
    );
}
