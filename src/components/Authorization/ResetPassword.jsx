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
            penis
        </dialog>
    );
}
