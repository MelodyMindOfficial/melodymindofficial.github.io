import { useEffect, useState } from 'react';
import { th } from '../../data/data';
import { th_en } from '../../data/data_en';
import './Admin.css';

export default function Admin() {
    const language = localStorage.getItem('language');
    const [sectionProfile, setSectionProfile] = useState('profile');
    // try {
    //     var userData = localStorage.getItem('userData');
    // } catch (error) {
    //     var userData = { a: 'a', b: 'b' };
    // }

    if (localStorage.getItem('userData')) {
        var userData = JSON.parse(localStorage.getItem('userData'));
        console.log('xuy');
    } else {
        var userData = [[['']]];
        console.log('blyad');
    }
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
                localStorage.setItem('userData', JSON.stringify(userData));
                console.log(localStorage.getItem('userData'));
            })
            .catch((err) => console.log(err));
    }

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
                                        {userData.map((e) => {
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
