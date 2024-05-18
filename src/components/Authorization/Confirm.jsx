import { useEffect, useRef, useState } from 'react';
import BlueButton from '../BlueButton/BlueButton';
import PinCodeInput from '../PinCodeInput';

export default function Confirm() {
    const dialog = useRef();
    const language = localStorage.getItem('language');
    var count = 0;
    const initDigits = ['', '', '', ''];
    const [digits, setDigits] = useState(initDigits);
    const [disable, setDisable] = useState(true);

    useEffect(() => {
        digits.map((e) => {
            if (e != '') count++;
            else count--;
        });
        if (count == 4) setDisable(false);
        else setDisable(true);
    }, [digits]);

    function confirm(e) {
        e.preventDefault();
    }

    return (
        <dialog ref={dialog} open>
            <div className="signWrap">
                <h3 className="signTitle">
                    <button onClick={() => history.back()}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    {language == 'en'
                        ? 'Enter the confirmation code'
                        : 'Введите код подтверждения'}
                </h3>
                <p className="signText">
                    {language == 'en'
                        ? "We've sent the confirmation code to "
                        : 'Мы оотправили код подтверждения на '}
                    <br />
                    {localStorage.getItem('email')}
                </p>

                <form onSubmit={confirm} method="post" className="signSelf">
                    <PinCodeInput
                        digits={digits}
                        changeHandler={setDigits}
                        // setDisable={(e) => setDisable(e)}
                    />
                    <BlueButton
                        padding={'8px 10px'}
                        fontSize={'14px'}
                        marginBottom={'12px'}
                        type="submit"
                        disabled={disable}
                    >
                        {language == 'en' ? 'Continue' : 'Продолжить'}
                    </BlueButton>
                </form>
            </div>
        </dialog>
    );
}
