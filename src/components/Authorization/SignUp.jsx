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
            penis
        </dialog>
    );
}
