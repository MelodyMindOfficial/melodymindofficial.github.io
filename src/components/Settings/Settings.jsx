import { useEffect, useState } from 'react';
import SettingsCredit from '../SettingsCredit';
import SettingsSocial from '../SettingsSocial';
import SettingsSubscription from '../SettingsSubscription';
import './Settings.css';

export default function Settings({ isMsg }) {
    const language = localStorage.getItem('language');
    try {
        var authorized = JSON.parse(localStorage.getItem('authData'));
    } catch (error) {
        setTimeout(() => {
            window.location.pathname = '/login';
        }, 500);
    }
    // var authorized = [
    //     true,
    //     999999,
    //     'John',
    //     'john1989@gmail.com',
    //     '123John!!!',
    //     'Smith',
    //     'John_Smith',
    //     null,
    //     'the UK',
    //     'I was born in London',
    //     0,
    //     false,
    //     0,
    //     0,
    //     0,
    //     79782156190,
    //     false,
    //     'johanSoundCloud',
    //     'johanYoutube',
    //     'johanRutube',
    //     '@johanTik-Tok',
    //     'johanTwitch',
    // ];

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
        phoneNumber: authorized[15],
        Auth2: authorized[16],
        soundCloud: authorized[17],
        youtube: authorized[18],
        rutube: authorized[19],
        tiktok: authorized[20],
        twitch: authorized[21],
    };

    const [msg, setMsg] = useState('');
    const [isname, setName] = useState(auth.name);
    const [issurname, setSurname] = useState(auth.surname);
    const [isdisplayName, setDisplayName] = useState(auth.displayName);
    const [islocation, setLocation] = useState(auth.location);
    const [isbio, setBio] = useState(auth.bio);
    const [isImg, setImg] = useState(auth.photo);

    const [newImg, setNewImg] = useState();
    const [showImg, setShowImg] = useState(false);
    const [sectionProfile, setSectionProfile] = useState('profile');

    function updateProfile(e) {
        e.preventDefault();
        console.log(newImg);

        if (newImg != '') {
            var url = 'https://cg30388.tw1.ru/config/updatePhoto.php';
            var Data = {
                id: auth.id,
                img: newImg,
            };
        } else {
            var url = 'https://cg30388.tw1.ru/config/update.php';

            var Data = {
                id: auth.id,
                name: isname,
                surname: issurname,
                displayName: isdisplayName,
                location: islocation,
                bio: isbio,
            };
        }
        var headers = {
            Accept: 'application/json',
            'Conten-Type': 'application/json',
        };
        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(Data),
        })
            .then((response) => response.json())
            .then((response) => {
                setNewImg('');
                setMsg(response[0].result);
                console.log(Data.img);
            })
            .catch((err) => console.log(err));
    }

    function newPhoto(e) {
        var target = e.target;
        var fileReader = new FileReader();

        fileReader.onload = () => {
            setNewImg(fileReader.result);
        };

        fileReader.readAsDataURL(target.files[0]);
    }

    useEffect(() => {
        isMsg(msg);
        setTimeout(() => setMsg(''), 5000);
    }, [msg]);

    useEffect(() => {
        if (newImg) setShowImg(true);
        else setShowImg(false);
    }, [newImg]);

    return (
        <div className="settingsContainer">
            <div className="_container">
                {showImg && (
                    <section className="settingsPhotoConfirm">
                        <div className="settingsPhotoConfirmContainer">
                            <div className="settingsPhotoConfirmImage">
                                <div className="settingsPhotoConfirmImageContainer">
                                    <img src={newImg} id="photoNew" alt="" />
                                </div>
                            </div>
                            <div className="settingsPhotoConfirmButtons">
                                <button onClick={() => setNewImg('')}>
                                    {language == 'en' ? 'Cancel' : 'Отмена'}
                                </button>
                                <button onClick={updateProfile}>
                                    {language == 'en'
                                        ? 'Confirm'
                                        : 'Подтвердить'}
                                </button>
                            </div>
                        </div>
                    </section>
                )}
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
                            <form method="" onSubmit={updateProfile}>
                                <section className="settingsImage">
                                    <img
                                        src={
                                            isImg ? isImg : './images/user.png'
                                        }
                                        alt=""
                                    />
                                    <div>
                                        {/* <button type=""> */}
                                        <input
                                            type="file"
                                            name="imageAva"
                                            id="imageAva"
                                            accept="image/png, image/jpeg"
                                            onChange={(e) => newPhoto(e)}
                                        />
                                        <label htmlFor="imageAva">
                                            {language == 'en'
                                                ? 'Upload image'
                                                : 'Загрузить изображение'}
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </label>
                                        {/* </button> */}
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
                                        value={isname}
                                        onChange={(event) =>
                                            setName(event.target.value)
                                        }
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
                                        value={issurname}
                                        onChange={(event) =>
                                            setSurname(event.target.value)
                                        }
                                    />
                                    <label htmlFor="nickname">
                                        {language == 'en'
                                            ? ''
                                            : 'Отображаемое имя'}
                                    </label>
                                    <input
                                        type="text"
                                        name="nickname"
                                        value={isdisplayName}
                                        onChange={(event) =>
                                            setDisplayName(event.target.value)
                                        }
                                        required
                                    />
                                    <label htmlFor="location">
                                        {language == 'en'
                                            ? ''
                                            : 'Местоположение'}
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={islocation}
                                        onChange={(event) =>
                                            setLocation(event.target.value)
                                        }
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
                                        {language == 'en'
                                            ? 'Save changes'
                                            : 'Сохранить изменения'}
                                    </button>
                                </section>
                            </form>
                        )}
                        {sectionProfile == 'credit' && (
                            <SettingsCredit
                                auth={auth}
                                isMsg={(current) => setMsg(current)}
                            />
                        )}
                        {sectionProfile == 'social' && (
                            <SettingsSocial
                                auth={auth}
                                isMsg={(current) => setMsg(current)}
                            />
                        )}
                        {sectionProfile == 'credit' && <SettingsSubscription />}
                    </div>
                </div>
            </div>
        </div>
    );
}
