import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import './Authorization.css';
import logo from '/images/user.png';
import BlueButton from '../BlueButton/BlueButton';

export default function SignUp({ email, isMsg }) {
    try {
        var authorized = JSON.parse(localStorage.getItem('authData'));
        if (authorized) {
            window.location.pathname = '/profile';
        }
    } catch (error) {}

    const dialog = useRef();
    const language = localStorage.getItem('language');
    const [isEmail, setIsEmail] = useState(email);
    const [isPassword, setIsPassword] = useState('');
    const [disable, setDisable] = useState(true);
    const [msg, setMsg] = useState('');

    function handlePasswordChange(event) {
        const password = document.getElementById('password');
        try {
            const email = document.getElementById('emailNew');
            if (email.value && password.value) {
                setDisable(false);
                setIsEmail(email.value);
                setIsPassword(password.value);
            } else setDisable(true);
        } catch (error) {
            if (event.target.value.trim().length != 0) {
                setDisable(false);
                setIsPassword(password.value);
            } else setDisable(true);
        }
    }

    useEffect(() => {
        localStorage.setItem('email', isEmail);
    }, [isEmail]);

    function signIn(e) {
        e.preventDefault();
        var url = 'https://cg30388.tw1.ru/config/sign-in.php';
        var headers = {
            Accept: 'application/json',
            'Conten-Type': 'application/json',
        };
        var Data = { email: isEmail, password: isPassword, language: language };
        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(Data),
        })
            .then((response) => response.json())
            .then((response) => {
                setMsg(response[0].result);
                setTimeout(
                    () =>
                        response[0].login
                            ? (window.location.pathname = '/profile')
                            : null,
                    2000
                );
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        isMsg(msg);
        setTimeout(() => {
            setMsg('');
        }, 2000);
    }, [msg]);

    return (
        <dialog ref={dialog} open>
            <div className="signWrap">
                <h3 className="signTitle">
                    <button onClick={() => history.back()}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    {language == 'en' ? 'Login with' : 'Войти с помощью'}
                </h3>
                <form onSubmit={signIn} method="post" className="signSelf">
                    {isEmail ? (
                        <div className="loginSection">
                            <img src={logo} alt="" />
                            <div className="">
                                <h5>
                                    {language == 'en' ? 'Email' : 'Эл. почта'}
                                </h5>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={isEmail}
                                    readOnly
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsEmail('')}
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    ) : (
                        <>
                            <label htmlFor="">
                                {language == 'en' ? 'Email' : 'Эл. почта'}
                            </label>
                            <input
                                type="email"
                                id="emailNew"
                                name="email"
                                placeholder={
                                    language == 'en' ? 'Email' : 'Эл. почта'
                                }
                                onChange={handlePasswordChange}
                                required
                            />
                        </>
                    )}
                    <label htmlFor="password" className="passwordLabelLogin">
                        {language == 'en' ? 'Password' : 'Пароль'}
                        <Link to="/reset-password">
                            {language == 'en'
                                ? 'Forgot password?'
                                : 'Забыли пароль?'}
                        </Link>
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder={
                            language == 'en'
                                ? 'Enter password'
                                : 'Введите пароль'
                        }
                        onChange={handlePasswordChange}
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
