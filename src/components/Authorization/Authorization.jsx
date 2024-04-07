import { useEffect, useRef, useState } from 'react';
import './Authorization.css';

export default function Authorization({ isModal, open, target }) {
    const dialog = useRef();

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
                    Продолжить с
                </h3>
                <form
                    action="./src/login.html"
                    method="post"
                    className="signSelf"
                    target={target}
                >
                    <label htmlFor="login">Эл.почта</label>
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
                        Продолжить
                    </button>
                </form>
                <p className="hr-line">или</p>
                <form
                    action="./"
                    method="post"
                    className="signAuth"
                    target="_blank"
                >
                    <button className="active" type="">
                        <img src="/google.png" alt="Google" />
                        Войти с аккаунтом Google
                    </button>
                    <button className="active" type="">
                        <img src="/yandex.png" alt="Yandex" />
                        Войти с аккаунтом Яндекс
                    </button>
                </form>
                <p className="signPolicy">
                    Создавая учетную запись и/или входя в систему, Вы
                    соглашаетесь с{' '}
                    <a href="" download>
                        Условиями использования
                    </a>{' '}
                    и{' '}
                    <a
                        href="/src/assets/docs/Политика конфиденциальности.pdf"
                        target="_blank"
                    >
                        Политикой конфиденциальности
                    </a>{' '}
                    MelodyMind
                </p>
            </div>
        </dialog>
    );
}
