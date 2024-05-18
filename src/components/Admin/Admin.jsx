import { useEffect, useState } from 'react';
import { th } from '../../data/data';
import { th_en } from '../../data/data_en';
import './Admin.css';

export default function Admin() {
    const language = localStorage.getItem('language');
    const [sectionProfile, setSectionProfile] = useState('profile');
    const [userDataArray, setUserDataArray] = useState([]);
    var userData = [];

    function updateAccounts(e) {
        e.preventDefault();

        var url = 'https://cg30388.tw1.ru/config/adminUsers.php';
        var headers = {
            Accept: 'application/json',
            'Conten-Type': 'application/json',
        };
        fetch(url, {
            method: 'POST',
            headers: headers,
        })
            .then((response) => response.json())
            .then((response) => {
                userData = response[0].result;
                console.log(userDataArray);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => setUserDataArray(userData), [userData]);

    return (
        <div className="adminContainer">
            <div className="_container">
                <h1 className="adminTitle">
                    {language == 'en' ? 'Admin panel' : 'Панель администратора'}
                </h1>
                <div className="adminSection">
                    <aside className="adminSideSection">
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
                    <div className="adminSectionMain">
                        {sectionProfile == 'profile' && (
                            <form method="">
                                <table>
                                    <tbody>
                                        <tr>
                                            {(language == 'en'
                                                ? th_en
                                                : th
                                            ).map((e) => (
                                                <th key={e}>{e}</th>
                                            ))}
                                        </tr>
                                        {userDataArray.map((e) => {
                                            <tr>
                                                {e.map((i) => (
                                                    <td key={i}>{i}</td>
                                                ))}
                                            </tr>;
                                        })}
                                        {/* <tr>
                                            {(language == 'en'
                                                ? th_en
                                                : th
                                            ).map((e) => (
                                                <td key={e}>
                                                    <input type="text" />
                                                </td>
                                            ))}
                                        </tr> */}
                                    </tbody>
                                </table>
                                <section className="adminText">
                                    <button
                                        type="submit"
                                        onClick={updateAccounts}
                                    >
                                        {language == 'en'
                                            ? 'Reload table'
                                            : 'Обновить таблицу'}
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
