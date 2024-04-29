import { useEffect, useState } from 'react';
import BlueButton from '../BlueButton/BlueButton';
import SettingsProfile from '../SettingsProfile';
import './Settings.css';
import SettingsCredit from '../SettingsCredit';
import SettingsSocial from '../SettingsSocial';
import SettingsSubscription from '../SettingsSubscription';

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
    const [isname, setName] = useState(auth.name || '');
    const [issurname, setSurname] = useState(auth.surname || '');
    const [isdisplayName, setDisplayName] = useState(auth.displayName || '');
    const [islocation, setLocation] = useState(auth.location || '');
    const [isbio, setBio] = useState(auth.bio || '');

    const [sectionProfile, setSectionProfile] = useState('profile');

    function updateProfile(e) {
        e.preventDefault();

        var url = 'https://cg30388.tw1.ru/config/update.php';
        var headers = {
            Accept: 'application/json',
            'Conten-Type': 'application/json',
        };
        var Data = {
            id: auth.id,
            name: isname,
            surname: issurname,
            displayName: isdisplayName,
            location: islocation,
            bio: isbio,
        };
        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(Data),
        })
            .then((response) => response.json())
            .then((response) => {
                setMsg(response[0].result);
                console.log(Data);
            })
            .catch((err) => console.log(err));
        console.log(Data);
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
                            <li
                                className={
                                    sectionProfile == 'profile' ? 'active' : ''
                                }
                                onClick={() => setSectionProfile('profile')}
                            >
                                {language == 'en' ? 'Profile' : 'Профиль'}
                            </li>
                            <li
                                className={
                                    sectionProfile == 'credit' ? 'active' : ''
                                }
                                onClick={() => setSectionProfile('credit')}
                            >
                                {language == 'en'
                                    ? 'Credentials'
                                    : 'Учетные данные'}
                            </li>
                            <li
                                className={
                                    sectionProfile == 'social' ? 'active' : ''
                                }
                                onClick={() => setSectionProfile('social')}
                            >
                                {language == 'en'
                                    ? 'Social network'
                                    : 'Социальные сети'}
                            </li>
                            <li
                                className={
                                    sectionProfile == 'subscription'
                                        ? 'active'
                                        : ''
                                }
                                onClick={() =>
                                    setSectionProfile('subscription')
                                }
                            >
                                {language == 'en' ? 'Subscription' : 'Подписка'}
                            </li>
                        </ul>
                    </aside>
                    <div className="settingsSectionMain">
                        {sectionProfile == 'profile' && (
                            <SettingsProfile
                                updateProfile={updateProfile}
                                auth={auth}
                            />
                        )}
                        {sectionProfile == 'credit' && <SettingsCredit />}
                        {sectionProfile == 'credit' && <SettingsSocial />}
                        {sectionProfile == 'credit' && <SettingsSubscription />}
                    </div>
                </div>
            </div>
        </div>
    );
}
