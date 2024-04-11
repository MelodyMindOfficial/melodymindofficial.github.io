import './Authorization.css';

export default function SignUp() {
    const dialog = useRef();
    const language = localStorage.getItem('language');
    const [disable, setDisable] = useState(true);

    function handlePasswordChange(event) {
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
                        ? 'Register with'
                        : 'Зарегистрироваться с'}
                </h3>
                <form
                    action="./../sign-in.php"
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
                        type="submit"
                    >
                        {language == 'en' ? 'Continue' : 'Продолжить'}
                    </button>
                </form>
            </div>
        </dialog>
    );
}
