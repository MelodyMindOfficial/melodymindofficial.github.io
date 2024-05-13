import { useRef } from 'react';

export default function Confirm() {
    const dialog = useRef();
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
