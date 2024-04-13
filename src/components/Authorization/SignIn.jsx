import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import './Authorization.css';

export default function SignUp({ email }) {
    const dialog = useRef();
    const language = localStorage.getItem('language');
    const [isEmail, setIsEmail] = useState(email);
    const [disable, setDisable] = useState(true);

    function handlePasswordChange(event) {
        try {
            const email = document.getElementById('emailNew');
            const password = document.getElementById('password');
            if (email.value && password.value) setDisable(false);
            else setDisable(true);
        } catch (error) {
            if (event.target.value.trim().length != 0) setDisable(false);
            else setDisable(true);
        }
    }

    useEffect(() => {
        localStorage.setItem('email', isEmail);
    }, [isEmail]);

    return (
        <dialog ref={dialog} open>
            <div className="signWrap">
                <h3 className="signTitle">
                    <button onClick={() => history.back()}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    {language == 'en' ? 'Login with' : 'Войти с помощью'}
                </h3>
                <form
                    action="./../sign-up.php"
                    method="post"
                    className="signSelf"
                >
                    {isEmail ? (
                        <div className="loginSection">
                            <img src="./../user.png" alt="" />
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
                    <button
                        className={!disable ? 'active' : null}
                        disabled={disable}
                        type="submit"
                    >
                        {language == 'en' ? 'Continue' : 'Продолжить'}
                    </button>
                </form>
            </div>
        </dialog>
    );
}
