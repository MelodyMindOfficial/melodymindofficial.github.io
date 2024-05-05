import { useEffect, useRef, useState } from 'react';
import './Authorization.css';
import BlueButton from '../BlueButton/BlueButton';

export default function ResetPassword({ email, isMsg }) {
    const oldEmail = email;
    const dialog = useRef();
    const language = localStorage.getItem('language');
    const [disable, setDisable] = useState(true);
    const [msg, setMsg] = useState('');
    const [isEmail, setIsEmail] = useState('');

    function handleEmailCorrect() {
        var email = document.getElementById('email');
        if (email.value) {
            setIsEmail(email.value);
            setDisable(false);
        } else {
            setDisable(true);
        }
    }

    function reset(e) {
        e.preventDefault();
        var url = 'https://cg30388.tw1.ru/config/resetEmail.php';
        var headers = {
            Accept: 'application/json',
            'Conten-Type': 'application/json',
        };
        var Data = { email: oldEmail, newEmail: isEmail, language: language };
        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(Data),
        })
            .then((response) => response.json())
            .then((response) => {
                setMsg(response[0].result);
                localStorage.setItem('email', isEmail);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        isMsg(msg);
        setTimeout(() => setMsg(''), 5000);
    }, [msg]);

    return (
        <dialog ref={dialog} open>
            <div className="signWrap">
                <h3 className="signTitle">
                    <button onClick={() => history.back()}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    {language == 'en'
                        ? 'Reset your email'
                        : 'Сбросьте свою эл. почту'}
                </h3>

                <form onSubmit={reset} method="post" className="signSelf">
                    <label htmlFor="password">
                        {language == 'en'
                            ? 'Enter your new email'
                            : 'Введите новую эл. почту'}
                    </label>
                    <input
                        type="email"
                        name="password"
                        id="email"
                        placeholder={
                            language == 'en'
                                ? 'Enter email'
                                : 'Введите эл. почту'
                        }
                        onChange={handleEmailCorrect}
                        required
                    />
                    <BlueButton
                        padding={'8px 10px'}
                        disabled={disable}
                        fontSize={'14px'}
                        marginBottom={'12px'}
                        type="submit"
                    >
                        {language == 'en' ? 'Continue' : 'Продолжить'}
                    </BlueButton>
                </form>
            </div>
        </dialog>
    );
}
