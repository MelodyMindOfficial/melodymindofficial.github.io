import { useEffect, useRef, useState } from 'react';
import './Authorization.css';

export default function Authorization({ isModal, open, target, isEmail }) {
    const dialog = useRef();
    const language = localStorage.getItem('language');
    const [disable, setDisable] = useState(true);

    function handleLoginChange(event) {
        if (event.target.value.trim().length != 0) setDisable(false);
        else setDisable(true);
    }

    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        } else {
            dialog.current.close();
        }
    }, [open]);

    return (
        <dialog ref={dialog}>
            <div className="signWrap">
                <h3 className="signTitle">
                    {target && (
                        <button onClick={() => isModal(false)}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    )}
                    {language == 'en' ? 'Continue with' : 'Продолжить с'}
                </h3>
                <form
                    action="./config/findLogin.php"
                    method="post"
                    className="signSelf"
                    target={target}
                    onSubmit={() =>
                        isEmail(document.getElementById('login').value)
                    }
                >
                    <label htmlFor="login">
                        {language == 'en' ? 'Email' : 'Эл.почта'}
                    </label>
                    <input
                        type="email"
                        name="login"
                        id="login"
                        onChange={handleLoginChange}
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
                <div className="hr-line">
                    <hr />
                    {language == 'en' ? 'or' : 'или'}
                    <hr />
                </div>
                <form
                    action="./config/connect.php"
                    method="post"
                    className="signAuth"
                    target="_blank"
                >
                    <button className="active" type="">
                        <img src="/google.png" alt="Google" />
                        {language == 'en'
                            ? 'Login with Google Account'
                            : 'Войти с аккаунтом Google'}
                    </button>
                    <button className="active" type="">
                        <img src="/yandex.png" alt="Yandex" />
                        {language == 'en'
                            ? 'Login with Yandex Account'
                            : 'Войти с аккаунтом Яндекс'}
                    </button>
                </form>
                <p className="signPolicy">
                    {language == 'en'
                        ? 'By creating an account and/or signing in, you agree to '
                        : 'Создавая учетную запись и/или входя в систему, Вы соглашаетесь с '}
                    <a href="" download>
                        {language == 'en'
                            ? 'Terms of Use'
                            : 'Условиями использования'}
                    </a>
                    {language == 'en' ? ' and ' : ' и '}
                    <a
                        href={
                            language == 'en'
                                ? '/src/assets/docs/Privacy Policy.pdf'
                                : '/src/assets/docs/Политика конфиденциальности.pdf'
                        }
                        target="_blank"
                    >
                        {language == 'en'
                            ? 'Privacy Policy'
                            : 'Политикой конфиденциальности'}
                    </a>{' '}
                    MelodyMind
                </p>
            </div>
        </dialog>
    );
}
