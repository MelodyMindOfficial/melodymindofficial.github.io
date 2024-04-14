import './Notify.css';

export default function Notify({ children, setShow }) {
    setTimeout(() => {
        setShow(false);
        switch (children) {
            case 'Вы успешно вошли':
                window.location.pathname = '/profile';
            case 'Вы успешно зарегистрировались':
                window.location.pathname = '/sign-in';
        }
    }, 5000);
    return (
        <form
            className="notifyForm"
            onSubmit={(event) => {
                event.preventDefault();
                setShow(false);
            }}
        >
            <p>{children}</p>
            <button type="submit">OK</button>
        </form>
    );
}
