import { useEffect, useRef, useState } from 'react';
import './Authorization.css';

export default function ResetPassword() {
    const dialog = useRef();
    const language = localStorage.getItem('language');
    const [disable, setDisable] = useState(true);

    function handleLoginChange(event) {
        if (event.target.value.trim().length != 0) setDisable(false);
        else setDisable(true);
    }

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
            </div>
        </dialog>
    );
}
