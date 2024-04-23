import { useEffect, useRef, useState } from 'react';
import './Authorization.css';
import BlueButton from '../BlueButton/BlueButton';

export default function ResetPassword({ email, isMsg }) {
    const dialog = useRef();
    const language = localStorage.getItem('language');
    const [disable, setDisable] = useState(true);
    const [msg, setMsg] = useState('');
    const [isPassword, setIsPassword] = useState('');

    function handlePasswordCorrect() {
        var password = document.getElementById('password');
        var passwordCheck = document.getElementById('passwordCheck');
        if (password.value == passwordCheck.value) {
            passwordCheck.classList.remove('error');
            setIsPassword(password.value);
            setDisable(false);
        } else {
            passwordCheck.classList.add('error');
            setDisable(true);
        }
    }

    function reset(e) {
        e.preventDefault();
        var url = 'https://cg30388.tw1.ru/config/reset.php';
        var headers = {
            Accept: 'application/json',
            'Conten-Type': 'application/json',
        };
        var Data = { email: email, password: isPassword, language: language };
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
        <dialog ref={dialog} open>
            <div className="signWrap">
                <h3 className="signTitle">
                    <button onClick={() => history.back()}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    {language == 'en'
                        ? 'Reset your password'
                        : 'Сбросьте свой пароль'}
                </h3>

                <form onSubmit={reset} method="post" className="signSelf">
                    <input
                        type="hidden"
                        id="email"
                        name="email"
                        value={email}
                        readOnly
                    />
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
                        onChange={handlePasswordCorrect}
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
