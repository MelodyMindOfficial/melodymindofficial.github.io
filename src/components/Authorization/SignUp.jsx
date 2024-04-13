import { useEffect, useRef, useState } from 'react';
import './Authorization.css';

export default function SignIn({ email, isMsg }) {
    const dialog = useRef();
    const language = localStorage.getItem('language');
    const [disable, setDisable] = useState(true);
    const [isEmail, setIsEmail] = useState(email);
    const [isPassword, setIsPassword] = useState('');
    const [isAllow, setAllow] = useState(false);
    const [msg, setMsg] = useState('');

    function handlePasswordCorrect() {
        var password = document.getElementById('password');
        var passwordCheck = document.getElementById('passwordCheck');
        var emailNew = document.getElementById('emailNew');
        if (
            password.value == passwordCheck.value &&
            password.value &&
            passwordCheck.value
        ) {
            setIsPassword(password.value);
            if (isAllow) {
                try {
                    emailNew.addEventListener('blur', () => {
                        if (emailNew.value) {
                            setIsEmail(emailNew.value);
                            setDisable(false);
                        } else {
                            setDisable(true);
                        }
                    });
                } catch (error) {
                    setDisable(false);
                }
            } else {
                setDisable(true);
            }
            passwordCheck.classList.remove('error');
        } else {
            passwordCheck.classList.add('error');
            setDisable(true);
        }
    }

    useEffect(() => {
        localStorage.setItem('email', isEmail);
    }, [isEmail]);

    function signUp(e) {
        e.preventDefault();
        var url = 'https://cg30388.tw1.ru/sign-up.php';
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
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => isMsg(msg), [msg]);

    return (
        <dialog ref={dialog} open>
            <div className="signWrap">
                <h3 className="signTitle">
                    <button onClick={() => history.back()}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    {language == 'en'
                        ? 'Register with'
                        : 'Зарегистрироваться с'}
                </h3>
                <form onSubmit={signUp} method="post" className="signSelf">
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
                                onClick={() => {
                                    setIsEmail('');
                                    handlePasswordCorrect();
                                }}
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
                                onChange={() => handlePasswordCorrect()}
                                required
                            />
                        </>
                    )}
                    <label htmlFor="password">
                        {language == 'en'
                            ? 'Create a password'
                            : 'Придумайте пароль'}
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
                        onChange={() => handlePasswordCorrect()}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        required
                    />
                    <span
                        style={{
                            marginBottom: '15px',
                            color: '#707070',
                            fontSize: '12px',
                        }}
                    >
                        {language == 'en'
                            ? 'At least 8 characters, including capital letter, number and special character'
                            : 'Не менее 8 символов, включая заглавную букву, цифру и специальный символ'}
                    </span>
                    <label htmlFor="passwordCheck">
                        {language == 'en'
                            ? 'Confirm a password'
                            : 'Подтвердите пароль'}
                    </label>
                    <input
                        type="password"
                        name="passwordCheck"
                        id="passwordCheck"
                        placeholder={
                            language == 'en'
                                ? 'Enter password again'
                                : 'Введите пароль еще раз'
                        }
                        onChange={handlePasswordCorrect}
                        required
                    />
                    <div className="checkBox">
                        <input
                            type="checkbox"
                            name="allow"
                            id="allow"
                            checked={isAllow}
                            onChange={() => handlePasswordCorrect()}
                        />
                        <label
                            htmlFor="allow"
                            onClick={() => setAllow(!isAllow)}
                        >
                            {language == 'en'
                                ? 'I read and agree with '
                                : ' Я прочёл(-ла) и соглашаюсь с '}
                            <a
                                href={
                                    language == 'en'
                                        ? '/src/assets/docs/Privacy policy.pdf'
                                        : '/src/assets/docs/Политика конфиденциальности.pdf'
                                }
                                download
                            >
                                {language == 'en'
                                    ? 'The User Agreement'
                                    : 'Пользовательским соглашением'}
                            </a>
                            {language == 'en' ? ' or ' : ' и '}
                            <a
                                href={
                                    language == 'en'
                                        ? '/src/assets/docs/Privacy policy.pdf'
                                        : '/src/assets/docs/Политика конфиденциальности.pdf'
                                }
                                download
                            >
                                {language == 'en'
                                    ? 'Privacy Policy'
                                    : 'Политикой конфиденциальности'}
                            </a>
                        </label>
                    </div>
                    <button
                        className={!disable ? 'active' : null}
                        disabled={disable}
                        // onClick={signUp}
                        type="submit"
                    >
                        {language == 'en' ? 'Continue' : 'Продолжить'}
                    </button>
                </form>
            </div>
        </dialog>
    );
}
