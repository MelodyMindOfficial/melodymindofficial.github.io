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
    } else {
        var userData = [[['']]];
    }

    // const auth = {
    //     login: userData[0],
    //     id: userData[1],
    //     name: userData[2],
    //     email: userData[3],
    //     password: userData[4],
    //     surname: userData[5],
    //     displayName: userData[6],
    //     photo: userData[7],
    //     location: userData[8],
    //     bio: userData[9],
    //     status: userData[10],
    //     subscription: userData[11],
    //     followers: userData[12],
    //     plays: userData[13],
    //     tracks: userData[14],
    //     phoneNumber: userData[15],
    //     Auth2: userData[16],
    //     soundCloud: userData[17],
    //     youtube: userData[18],
    //     rutube: userData[19],
    //     tiktok: userData[20],
    //     twitch: userData[21],
    // };

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
                window.location.reload();
            })
            .catch((err) => console.log(err));
    }

    function editAccount(e, account) {
        e.preventDefault();

        window.location.pathname = '/admin?' + account;
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
                                            <th>
                                                {language == 'en'
                                                    ? 'Edit'
                                                    : 'Редактировать'}
                                            </th>
                                            {(language == 'en'
                                                ? th_en
                                                : th
                                            ).map((e) => (
                                                <th key={e}>{e}</th>
                                            ))}
                                        </tr>
                                        {userData.map((e) => (
                                            <tr>
                                                <td>
                                                    <button
                                                        onClick={(event) =>
                                                            editAccount(
                                                                event,
                                                                e
                                                            )
                                                        }
                                                    >
                                                        <i className="fa-solid fa-pen"></i>
                                                    </button>
                                                </td>
                                                <td>{e.id}</td>
                                                <td>{e.email}</td>
                                                <td>{e.password}</td>
                                                <td>{e.name}</td>
                                                <td>{e.surname}</td>
                                                <td>{e.displayName}</td>
                                                <td>{e.location}</td>
                                                <td>{e.bio}</td>
                                                <td>
                                                    <img src={e.photo} alt="" />
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        min={0}
                                                        max={1}
                                                        value={e.status}
                                                    />
                                                </td>
                                                <td>{e.subscription}</td>
                                                <td>{e.followers}</td>
                                                <td>{e.plays}</td>
                                                <td>{e.tracks}</td>
                                                <td>{e.phoneNumber}</td>
                                                <td>{e.soundCloud}</td>
                                                <td>{e.youtube}</td>
                                                <td>{e.rutube}</td>
                                                <td>{e.tiktok}</td>
                                                <td>{e.twitch}</td>
                                            </tr>
                                        ))}
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
