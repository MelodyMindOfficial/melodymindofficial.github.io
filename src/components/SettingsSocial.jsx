import { useEffect, useState } from 'react';

export default function SettingsSocial({ auth, isMsg }) {
    const language = localStorage.getItem('language');

    const dataAuth = auth;
    const [msg, setMsg] = useState('');
    const [isSoundCloud, setIsSoundCloud] = useState(dataAuth.soundCloud);
    const [isYoutube, setIsYoutube] = useState(dataAuth.youtube);
    const [isRutube, setIsRutube] = useState(dataAuth.rutube);
    const [isTiktok, setIsTiktok] = useState(dataAuth.tiktok);
    const [isTwitch, setIsTwitch] = useState(dataAuth.twitch);

    function updateSocial(e) {
        e.preventDefault();
        var url = 'https://cg30388.tw1.ru/config/updateSocial.php';
        var headers = {
            Accept: 'application/json',
            'Conten-Type': 'application/json',
        };
        var Data = {
            id: dataAuth.id,
            soundCloud: isSoundCloud,
            youtube: isYoutube,
            rutube: isRutube,
            tiktok: isTiktok,
            twitch: isTwitch,
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
        <form method="" onSubmit={updateSocial}>
            <section className="settingsText">
                <div>
                    <label htmlFor="soundCloud">Sound Cloud</label>
                    {isSoundCloud == '' && (
                        <span className="placeholder">
                            <span className="domain">
                                <del>soundcloud.com/</del>
                            </span>
                            <span className="user">nickname</span>
                        </span>
                    )}
                    <input
                        type="text"
                        name="soundCloud"
                        value={isSoundCloud}
                        onChange={(event) =>
                            setIsSoundCloud(event.target.value)
                        }
                    />
                </div>
                <div>
                    <label htmlFor="youtube">Youtube</label>
                    {isYoutube == '' && (
                        <span className="placeholder">
                            <span className="domain">
                                <del>youtube.com/</del>
                            </span>
                            <span className="user">nickname</span>
                        </span>
                    )}
                    <input
                        type="text"
                        name="youtube"
                        value={isYoutube}
                        onChange={(event) => setIsYoutube(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="rutube">Rutube</label>
                    {isRutube == '' && (
                        <span className="placeholder">
                            <span className="domain">
                                <del>rutube.ru/channel/</del>
                            </span>
                            <span className="user">nickname</span>
                        </span>
                    )}
                    <input
                        type="text"
                        name="rutube"
                        value={isRutube}
                        onChange={(event) => setIsRutube(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="tiktok">Tik-Tok</label>
                    {isTiktok == '' && (
                        <span className="placeholder">
                            <span className="domain">
                                <del>tictok.com/</del>
                            </span>
                            <span className="user">@nickname</span>
                        </span>
                    )}
                    <input
                        type="text"
                        name="tiktok"
                        value={isTiktok}
                        onChange={(event) => setIsTiktok(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="twitch">Twitch</label>
                    {isTwitch == '' && (
                        <span className="placeholder">
                            <span className="domain">
                                <del>twitch.tv/</del>
                            </span>
                            <span className="user">nickname</span>
                        </span>
                    )}
                    <input
                        type="text"
                        name="twitch"
                        value={isTwitch}
                        onChange={(event) => setIsTwitch(event.target.value)}
                    />
                </div>
                <button type="submit">
                    {language == 'en' ? 'Save changes' : 'Сохранить изменения'}
                </button>
            </section>
        </form>
    );
}
